System.register(['angular2/core', 'angular2/router', './blog.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, blog_service_1;
    var blogComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (blog_service_1_1) {
                blog_service_1 = blog_service_1_1;
            }],
        execute: function() {
            blogComponent = (function () {
                function blogComponent(_service, _routeParams) {
                    this._service = _service;
                    this._routeParams = _routeParams;
                }
                blogComponent.prototype.ngOnInit = function () {
                    var _this = this;
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
                    var that = this;
                    this.postId = this._routeParams.get('id');
                    if (this.postId) {
                        this._service.getPosts().subscribe(function (allPosts) {
                            var file = JSON.parse(allPosts._body).posts[that.postId - 1].file;
                            that._service.getPost(file).subscribe(function (post) { return that.post = marked(post._body); });
                        });
                    }
                    this._service.getPosts().subscribe(function (allPosts) { return _this.allPosts = JSON.parse(allPosts._body).posts; });
                };
                blogComponent = __decorate([
                    core_1.Component({
                        selector: 'blog-component',
                        providers: [blog_service_1.BlogService]
                    }),
                    core_1.View({
                        templateUrl: "app/components/blog/blog.component.html",
                        styleUrls: ["./app/components/blog/blog.component.css"],
                        directives: [router_1.ROUTER_DIRECTIVES],
                    }), 
                    __metadata('design:paramtypes', [blog_service_1.BlogService, router_1.RouteParams])
                ], blogComponent);
                return blogComponent;
            }());
            exports_1("blogComponent", blogComponent);
        }
    }
});
