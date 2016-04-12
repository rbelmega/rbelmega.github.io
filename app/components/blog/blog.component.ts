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

	public allPosts;
	public postId;
	public post;


	constructor(private _service:BlogService,
				private _routeParams:RouteParams) {
	}

	ngOnInit() {
		marked.setOptions({
			renderer: new marked.Renderer(),
			gfm: true,
			tables: true,
			breaks: false,
			pedantic: false,
			sanitize: true,
			smartLists: true,
			smartypants: true
		});
		var that =  this;
		this.postId = this._routeParams.get('id');

		if (this.postId) {
			this._service.getPosts().subscribe(function (allPosts) {
				var file = JSON.parse(allPosts._body).posts[that.postId - 1].file;
				that._service.getPost(file).subscribe(post => that.post = marked(post._body));
			});
		}

		this._service.getPosts().subscribe(allPosts => this.allPosts = JSON.parse(allPosts._body).posts);
	}
}