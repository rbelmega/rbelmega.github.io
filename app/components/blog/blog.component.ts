import {View, Component, OnInit} from 'angular2/core';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {BlogService} from './blog.service';


@Component({
	selector: 'blog-component',
	providers: [BlogService]
})

@View({
	templateUrl: "app/components/blog/blog.component.html",
	styleUrls: ["./app/components/blog/blog.component.css"],
	directives: [ROUTER_DIRECTIVES],
})
export class blogComponent implements OnInit {

	public dates = [1, 2, 3];
	public postId;
	public post;


	constructor(private _service:BlogService,
				private _routeParams:RouteParams) {
	}

	ngOnInit() {
		this.postId = this._routeParams.get('id');
		this._service.getPost().then(post => this.post = markdown.toHTML(post, 'Maruku');

	}
}