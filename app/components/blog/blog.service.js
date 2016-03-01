System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var BlogService, post;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            BlogService = (function () {
                function BlogService() {
                }
                BlogService.prototype.getPost = function () {
                    return Promise.resolve(post);
                };
                BlogService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], BlogService);
                return BlogService;
            })();
            exports_1("BlogService", BlogService);
            post = "\n# English\n\n### UNIT 1\n##### talking about habbits\n- tend to + verb\n- will/won't\n- preset continuous\n- past simple\n- used to + verb\n\n### UNIT 2\n#### non-definig relative clauses\n- which / that / who / when / where\n- most of which / many of which\n- by which time / during which time\n\n\n- have got to / have to to\n- will have to\n- might / shall (for questions)\n- due to (time)\n- (be) bound to\n\n## UNIT 3\n#### if / so / to\n- to (purpose of doing things)\n- if (possible situation)\n- so (potential result)\n\n#### indirect questions\n- Would you hapen to thow when...\n- Do you know where...\n- I was wondering whether...\n- Do you think..\n\n## UNIT 4\n#### so / such\n- so (few, little, much, many)\n- such + noun (a lot of)\n\n## UNIT 5\n##### should(n't) have, could(n't) have, would(n't) have\n- should have + pp (when you failed)\n- shouldn't have + pp (when you did a mistake)\n- could(n't) have + pp (possible past result)\n- would(n't) have + pp (certain past result)\n\n\n- presetn perfect continuous\n- presetn perfect simple\n\n## UNIT 6\n#### modifiers\n- a bit / quite / fairly / pretty / rather rough - weeker\n- very / really / extremely - stronger\n\n> dont use very with words that already have idea of \"very\". Use really instead\n\n#### have / get something done\n> I had my bike stolen\n\n> We are having our house painting next summer\n\n\n## UNIT 7\n#### narrative tenses\n- When the rain started, we went home\n- I met my wife when I was living in Slovakia\n- I had already answered two questions by the time he finished\n\n";
        }
    }
});
