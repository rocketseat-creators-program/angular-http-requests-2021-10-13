import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  id!: number;
  student?: Student;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private studentService: StudentsService
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.searchStudent();
  }

  onUpdate() {
    this.studentService.update(this.id, this.student!).subscribe(() => {
      this.router.navigateByUrl("/students");
    });
  }

  isValid() {
    if (!this.student!.name || !this.student!.email || !this.student!.birthday) {
      return false;
    }

    return true;
  }

  private searchStudent() {
    this.studentService.findById(this.id).subscribe(response => {
      this.student = response;
    }, err => {
      this.router.navigateByUrl("/students");
    });
  }

}
