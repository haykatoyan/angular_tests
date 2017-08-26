import {Component} from "@angular/core";

@Component({
	selector: 'my-app',
	template: `
				<list-employee></list-employee>
				<p>Today is {{today | date}}</p>
			`
})
export class AppComponent {
	name : string = "Tom";
	today: number = Date.now();

	onClick() : void {
		console.log("clicked");
	}
}
