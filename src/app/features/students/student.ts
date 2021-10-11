export interface Student {
    id: number;
    name: string;
    email: string;
    birthday: string;
    createdAt: Date;
}

export class Student {
    name: string;
    email: string;
    birthday: string;

    constructor(name?: string, email?: string, birthday?: string) {
        this.name = name || '';
        this.email = email || '';
        this.birthday = birthday || '';
    }
}
