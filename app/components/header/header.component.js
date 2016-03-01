System.register(['angular2/core', '../contacts/contacts.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, contacts_component_1;
    var headerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (contacts_component_1_1) {
                contacts_component_1 = contacts_component_1_1;
            }],
        execute: function() {
            headerComponent = (function () {
                function headerComponent() {
                    this.profileInfo = "Rostyslav Belmeha";
                    this.hoveredColor = {
                        color: "",
                        letter: ""
                    };
                    this.contactList = [
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
                headerComponent = __decorate([
                    core_1.Component({
                        selector: 'header-component'
                    }),
                    core_1.View({
                        directives: [contacts_component_1.contactsComponent],
                        templateUrl: "./app/components/header/header.component.html",
                        styleUrls: ["./app/components/header/header.component.css"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], headerComponent);
                return headerComponent;
            })();
            exports_1("headerComponent", headerComponent);
        }
    }
});
