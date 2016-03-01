import {View, Component} from 'angular2/core';
import {contactsComponent} from '../contacts/contacts.component'


@Component({
	selector: 'header-component'
})


@View({
	directives: [contactsComponent],
	templateUrl: "./app/components/header/header.component.html",
	styleUrls: ["./app/components/header/header.component.css"]
})

export class headerComponent {
	public profileInfo = "Rostyslav Belmeha";

	public hoveredColor = {
		color: "",
		letter: ""
	};
	public contactList = [
		{
			name: "Linkedin",
			link: "https://www.linkedin.com/in/rostyslav-belmega-8b540643",
			color: "#1A85BC",
			letter: "l"
		},
		{
			name: "Twitter",
			link: "https://twitter.com/izzz0",
			color: "#55ACEE",
			letter: "t"
		},
		{
			name: "Facebook",
			link: "https://www.facebook.com/r.belmega",
			color: "#3F5D9A",
			letter: "f"
		},
		{
			name: "GitHub",
			link: "https://github.com/rbelmega",
			color: "#2A2B2D",
			letter: "g"
		}
	];
}