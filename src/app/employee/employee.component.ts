
import {Component} from "@angular/core"

@Component({
	selector: "my-employee",
	templateUrl: "app/employee/employee.component.html",
	styleUrls: ["app/employee/employee.component.css"]
	//styles: ["table { color: #369; font-family: Arial, Helvetica, sans-serif; font-size: large; border-collapse: collapse;}", "td {	border: 0.5px solid green;}"]
})
export class EmployeeComponent {
	colspan : number = 2;
	firstName : string = 'Hayk';
	lastName : string = 'Atoyan';
	gender : string = 'male';
	age : number = 20;
}
//This is for git commit