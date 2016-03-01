import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {mainpageComponent} from './components/mainPage/mainpage.component';
import {blogComponent} from "./components/blog/blog.component";


@Component({
	selector: 'my-app',
	providers: [],
	template:`
    <router-outlet></router-outlet>
`,
	styles:[],
	directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
	{path:'/', name: 'Mainpage', component: mainpageComponent},
	{path:'/blog/:id', name: 'Blog', component: blogComponent},

])
export class AppComponent implements OnInit {
	ngOnInit() {
	}
}