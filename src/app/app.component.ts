import {Component} from "@angular/core";

@Component({
	selector: 'my-app',
	template: `
			<div>
				<my-employee></my-employee>
			</div>
	`
})
export class AppComponent {
	pageHeader : string = "Employee Details";
	imageSource : string = "Images/Logo.JPG";
	isDisabled : boolean = false;

	badHtml = "Hello <script> alert('hacked'); </script> world!";

	firstName : string = "Hayk";
	lastName : string = "Atoyan";

	getFullName() : string {
		return this.firstName + " " + this.lastName;
	} 
}
