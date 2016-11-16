System.register(['angular2/core', '../services/asset.service', 'angular2/http', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, asset_service_1, http_1, router_1;
    var AssetsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (asset_service_1_1) {
                asset_service_1 = asset_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AssetsComponent = (function () {
                function AssetsComponent(_assetService, _router) {
                    this._assetService = _assetService;
                    this._router = _router;
                    this.models = [];
                    this.interactiveMode = [];
                }
                AssetsComponent.prototype.ngOnInit = function () {
                    //this._assetService.getData().subscribe(rsp => {console.log(rsp);});
                    this.models = this._assetService.getModels();
                    //console.log(this.models);
                };
                AssetsComponent.prototype.media = function (model) {
                    if (model.interactive) {
                        return model.render;
                    }
                    else {
                        return model.thumbnail;
                    }
                };
                AssetsComponent.prototype.toggleMode = function (model) {
                    model.interactive = !model.interactive;
                };
                AssetsComponent = __decorate([
                    core_1.Component({
                        selector: 'assets',
                        template: "\n    <div>\n      <h2 style=\"text-align:center\">Assets Page</h2>\n\n        <!-- --\n        <div style=\"text-align:center;margin:10 auto\" (click)=\"onClick($event)\" *ngFor=\"#model of models\">\n          <iframe src=\"{{model.thumbnail}}\" width=\"640\" height=\"480\" allowfullscreen></iframe>\n        </div><!-- -->\n\n        <div class=\"media\" style=\"margin:5 5\" *ngFor=\"#model of models\">\n          <div class=\"media-left\">\n            <iframe src=\"{{media(model)}}\" width=\"640\" height=\"480\" allowfullscreen></iframe>\n          </div>\n          <div class=\"media-body\">\n            <h4 class=\"media-heading\">Media Heading</h4>\n            <div>Media Body</div>\n            <div class=\"btn-group\" role=\"group\">\n              <button class=\"btn btn-default\" [class.disabled]=\"model.interactive\" (click)=\"model.interactive = true\">Interactive</button>\n              <button class=\"btn btn-default\" [class.disabled]=\"!model.interactive\" (click)=\"model.interactive = false\">Static</button>\n            </div>\n          </div>\n        </div>\n    </div>\n  ",
                        directives: [router_1.RouterLink],
                        providers: [asset_service_1.AssetService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [asset_service_1.AssetService, router_1.Router])
                ], AssetsComponent);
                return AssetsComponent;
            }());
            exports_1("AssetsComponent", AssetsComponent);
        }
    }
});
//# sourceMappingURL=assets.component.js.map