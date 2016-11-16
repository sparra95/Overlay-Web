System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(_router) {
                    this._router = _router;
                    // TODO: Better to use ngControl or ngModel for forms?
                    // TODO: Validate forms, cannot submit empty fields -> add 'required' to input fields
                    this.client = {
                        username: '',
                        password: ''
                    };
                }
                LoginComponent.prototype.authenticate = function (form) {
                    // TODO: Authenticate the user; use login.service; on success, route to home/dashboard
                    console.log("Submitted: ", this.client);
                    this._router.navigate(['Home', { tab: 'dashboard' }]);
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login',
                        template: "\n      <div style=\"width:80%;margin:auto;padding:20px 100px;\">\n        <h1>Overlay in Angular 2</h1>\n        <h4>Admin Portal</h4>\n        <form #form=\"ngForm\" (ngSubmit)=\"authenticate(form)\">\n        <!-- if using ngControl, add #username=\"ngForm\" to proper tag; same with password -->\n          <div class=\"form-group\">\n            <label for=\"username\">Username</label>\n            <input ngControl=\"username\" id=\"username\" class=\"form-control\" type=\"text\" [(ngModel)]=\"client.username\" />\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input ngControl=\"password\" id=\"password\" class=\"form-control\" input=\"text\" [(ngModel)]=\"client.password\" />\n          </div>\n          <button class=\"btn btn-default\" type=\"submit\" ngDisabled=\"username.invalid || password.invalid\">Login</button>\n        </form>\n      </div>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map