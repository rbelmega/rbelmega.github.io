import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';


@Injectable()
export class BlogService {

	constructor(public http:Http) {
	}

	getPost(link) {
		return this.http.get("/app/blog/posts/" + link);
	}

	getPosts() {
		return this.http.get("/app/blog/posts.json");
	}
}