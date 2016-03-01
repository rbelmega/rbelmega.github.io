import {View, Component} from "angular2/core"

@Component({
	inputs: ['contacts', 'hovered'],
	selector: "contacts-component"
})

@View({
	templateUrl: "./app/components/contacts/contacts.component.html",
	styleUrls: ["./app/components/contacts/contacts.component.css"]
})

export class contactsComponent {
}