import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

import { Student } from './student';
import { catchError, delay, finalize, mergeMap, retryWhen, scan } from 'rxjs/operators';
import { Observable, ObservableInput, throwError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private url = `${environment.apiUrl}/students`;

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService) {
  }

  save(student: Student) {
    this.spinner.show();
    return this.http.post<Student>(this.url, student).pipe(
      delay(1000),
      catchError(error => this.exceptionHandler(error)),
      finalize(() => this.spinner.hide())
    );
  }

  update(id: number, student: Student) {
    this.spinner.show();
    return this.http.put<Student>(`${this.url}/${id}`, student).pipe(
      delay(1000),
      catchError(error => this.exceptionHandler(error)),
      finalize(() => this.spinner.hide())
    );
  }

  deleteById(id: number) {
    this.spinner.show();
    return this.http.delete<void>(`${this.url}/${id}`).pipe(
      delay(1000),
      catchError(error => this.exceptionHandler(error)),
      finalize(() => this.spinner.hide())
    );
  }

  findById(id: number) {
    this.spinner.show();
    return this.http.get<Student>(`${this.url}/${id}`).pipe(
      delay(1000),
      catchError(error => this.exceptionHandler(error)),
      finalize(() => this.spinner.hide())
    );
  }

  findAll() {
    this.spinner.show();
    return this.http.get<Student[]>(this.url).pipe(
      delay(1000),
      retryWhen(err => this.retryHandler(err)),
      catchError(err => this.exceptionHandler(err)),
      finalize(() => this.spinner.hide())
    );
  }

  private exceptionHandler(error: HttpErrorResponse): ObservableInput<any> {
    this.toastr.error(error.message, `${error.status} - ${error.statusText}`);
    return throwError(error);
  }

  private retryHandler(error: Observable<any>): Observable<any> {
    return error.pipe(
      delay(1000),
      mergeMap(err => {
        if (err.status <= 500) return of(err);
        return throwError(err);
      }),
      scan((acc, err) => {
        if (acc > 5) throw err;
        this.toastr.warning(`Retrying the request #${acc}`, `${err.status} - Retrying`);
        return ++acc;
      }, 1));
  }

}
