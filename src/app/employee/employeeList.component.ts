import {Component} from "@angular/core";


@Component({
	selector: "list-employee",
	templateUrl: "app/employee/employeeList.component.html"
})
export class EmployeeListComponent {
	employees : any[];

	constructor() {
		this.employees = [
			{code: "emp1", name: "Hayk", gender: "male", annualSalary: 1000000.1223, dateOfBirth: "10/14/1996"},
			{code: "emp2", name: "Garik", gender: "male", annualSalary: 10000.1223, dateOfBirth: "10/12/1996"},
			{code: "emp3", name: "Hambal", gender: "male", annualSalary: 10.1, dateOfBirth: "10/14/1946"},
			{code: "emp4", name: "Vochxar", gender: "male", annualSalary: 200.1223, dateOfBirth: "10/14/1001"}
		];
	}

	getEmployees() : void {
		this.employees = [
			{code: "emp1", name: "Hayk", gender: "male", annualSalary: 1000000.1223, dateOfBirth: "10/14/1996"},
			{code: "emp2", name: "Garik", gender: "male", annualSalary: 10000.1223, dateOfBirth: "10/12/1996"},
			{code: "emp3", name: "Hambal", gender: "male", annualSalary: 10.1, dateOfBirth: "10/14/1946"},
			{code: "emp4", name: "Vochxar", gender: "male", annualSalary: 200.1223, dateOfBirth: "10/14/1001"}
			{code: "emp5", name: "Kaban", gender: "male", annualSalary: 300.13, dateOfBirth: "10/10/1551"}
		];
	}

	trackByEmpCode(index : number, employee : any) : string {
		return employee.code;
	}

}
