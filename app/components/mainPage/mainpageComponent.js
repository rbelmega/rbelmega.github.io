System.register(['angular2/core', '../header/header.component', '../body/body.component', '../footer/footer.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, header_component_1, body_component_1, footer_component_1;
    var mainpageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            },
            function (body_component_1_1) {
                body_component_1 = body_component_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            }],
        execute: function() {
            mainpageComponent = (function () {
                function mainpageComponent() {
                }
                mainpageComponent = __decorate([
                    core_1.Component({
                        selector: 'mainpage-component',
                        providers: [],
                        template: "\n\t\t<header-component></header-component>\n\t\t<body-component></body-component>\n\t\t<footer-component></footer-component>\n\t\t<router-outlet></router-outlet>\n",
                        directives: [header_component_1.headerComponent, body_component_1.bodyComponent, footer_component_1.footerComponent],
                        styles: []
                    }), 
                    __metadata('design:paramtypes', [])
                ], mainpageComponent);
                return mainpageComponent;
            })();
            exports_1("mainpageComponent", mainpageComponent);
        }
    }
});