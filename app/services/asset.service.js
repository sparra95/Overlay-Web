System.register(['angular2/http', 'rxjs/add/operator/map', 'angular2/core'], function(exports_1, context_1) {
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
    var http_1, core_1;
    var AssetService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AssetService = (function () {
                function AssetService(_http) {
                    this._http = _http;
                    this._url = "http://jsonplaceholder.typicode.com/posts";
                }
                AssetService.prototype.getData = function () {
                    return this._http.get("http://jsonplaceholder.typicode.com/posts")
                        .map(function (res) { return res.json(); });
                };
                AssetService.prototype.getModels = function () {
                    // https://clara.io/embed/{uuid}?renderer=webgl   --> This is to render the image and interact with it
                    return [
                        {
                            id: '5eb35447-b387-4854-bfc7-ee2f0951e2ef',
                            thumbnail: "https://clara.io/api/scenes/5eb35447-b387-4854-bfc7-ee2f0951e2ef/thumbnail.jpg",
                            render: "https://clara.io/embed/5eb35447-b387-4854-bfc7-ee2f0951e2ef?renderer=webgl",
                            interactive: false
                        },
                        {
                            id: '1a03ac6b-d6b5-4c2d-9f1a-c80068311396',
                            thumbnail: "https://clara.io/api/scenes/1a03ac6b-d6b5-4c2d-9f1a-c80068311396/thumbnail.jpg",
                            render: "https://clara.io/embed/1a03ac6b-d6b5-4c2d-9f1a-c80068311396?renderer=webgl",
                            interactive: false
                        },
                        {
                            id: '01ac9905-f849-46fa-bd57-b662995df3bb',
                            thumbnail: "https://clara.io/api/scenes/01ac9905-f849-46fa-bd57-b662995df3bb/thumbnail.jpg",
                            render: "https://clara.io/embed/01ac9905-f849-46fa-bd57-b662995df3bb?renderer=webgl",
                            interactive: false
                        },
                        {
                            id: 'b733ea40-f35f-4115-a15b-f5a44275f02e',
                            thumbnail: "https://clara.io/api/scenes/b733ea40-f35f-4115-a15b-f5a44275f02e/thumbnail.jpg",
                            render: "https://clara.io/embed/b733ea40-f35f-4115-a15b-f5a44275f02e?renderer=webgl",
                            interactive: false
                        }
                    ];
                };
                AssetService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AssetService);
                return AssetService;
            }());
            exports_1("AssetService", AssetService);
        }
    }
});
//# sourceMappingURL=asset.service.js.map