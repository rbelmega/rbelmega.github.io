import {View, Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {MetaDataService} from '../../metadata.service';
import {blogComponent} from '../blog/blog.component';


@Component({
	providers: [MetaDataService],
	selector: 'body-component'
})

@View({
	templateUrl: "app/components/body/body.component.html",
	styleUrls: ["./app/components/body/body.component.css"],
	directives: [blogComponent]
})

export class bodyComponent implements OnInit {

	public aboutMe;

	constructor(private _metadataService: MetaDataService) { }

	getAboutMeInfo() {
		this._metadataService.getAboutMeInfo().then(aboutMe => this.aboutMe = aboutMe);
	}

	getScript() {
		var d = document;
		var s = "script";
		var id = "twitter-wjs";
		var js, fjs = d.getElementById("tweets");
		var p = /^http:/.test(<string>d.location) ? 'http' : 'https';
		if (!d.getElementById(id)) {
			js = d.createElement(s);
			js.id = id;
			js.src = p + "://platform.twitter.com/widgets.js";
			fjs.parentNode.insertBefore(js, fjs);
		}
	}
	ngOnInit() {
		this.getAboutMeInfo();
		//this.getScript();
	}
}