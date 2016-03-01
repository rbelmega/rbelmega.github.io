import {View, Component} from 'angular2/core';
import {headerComponent} from '../header/header.component';
import {bodyComponent} from '../body/body.component';
import {footerComponent} from '../footer/footer.component';

@Component({
	selector: 'mainpage-component',
	providers: [],
	template:`
		<header-component></header-component>
		<body-component></body-component>
		<footer-component></footer-component>
		<router-outlet></router-outlet>
`,
	directives: [headerComponent, bodyComponent, footerComponent],
	styles:[]
})
export class mainpageComponent {


}