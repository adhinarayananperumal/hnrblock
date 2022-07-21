export class Employee {

    employeeName: string;
    id: string;
    age: number;
    gender: string;

    constructor(employeeName: string, empId: string, age: number, gender: string) {
        this.employeeName = employeeName;
        this.id = empId;
        this.age = age;
        this.gender = gender;
    }
}


