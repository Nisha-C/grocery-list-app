import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
		<div> 
			<h1> {{ pageTitle }} </h1>
			<app-groceries></app-groceries>
		</div>
		`
})

export class AppComponent {
	pageTitle = 'My Groceries To Manager';
}