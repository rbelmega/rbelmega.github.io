System.register(['angular2/core', '../../metadata.service', '../blog/blog.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, metadata_service_1, blog_component_1;
    var bodyComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (metadata_service_1_1) {
                metadata_service_1 = metadata_service_1_1;
            },
            function (blog_component_1_1) {
                blog_component_1 = blog_component_1_1;
            }],
        execute: function() {
            bodyComponent = (function () {
                function bodyComponent(_metadataService) {
                    this._metadataService = _metadataService;
                }
                bodyComponent.prototype.getAboutMeInfo = function () {
                    var _this = this;
                    this._metadataService.getAboutMeInfo().then(function (aboutMe) { return _this.aboutMe = aboutMe; });
                };
                bodyComponent.prototype.getScript = function () {
                    var d = document;
                    var s = "script";
                    var id = "twitter-wjs";
                    var js, fjs = d.getElementById("tweets");
                    var p = /^http:/.test(d.location) ? 'http' : 'https';
                    if (!d.getElementById(id)) {
                        js = d.createElement(s);
                        js.id = id;
                        js.src = p + "://platform.twitter.com/widgets.js";
                        fjs.parentNode.insertBefore(js, fjs);
                    }
                };
                bodyComponent.prototype.ngOnInit = function () {
                    this.getAboutMeInfo();
                    //this.getScript();
                };
                bodyComponent = __decorate([
                    core_1.Component({
                        providers: [metadata_service_1.MetaDataService],
                        selector: 'body-component'
                    }),
                    core_1.View({
                        templateUrl: "app/components/body/body.component.html",
                        styleUrls: ["./app/components/body/body.component.css"],
                        directives: [blog_component_1.blogComponent]
                    }), 
                    __metadata('design:paramtypes', [metadata_service_1.MetaDataService])
                ], bodyComponent);
                return bodyComponent;
            })();
            exports_1("bodyComponent", bodyComponent);
        }
    }
});
