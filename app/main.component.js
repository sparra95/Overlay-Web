System.register(['angular2/core', './pages/dashboard.component', './pages/assets.component', './pages/analytics.component', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, dashboard_component_1, assets_component_1, analytics_component_1, router_1;
    var MainComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (assets_component_1_1) {
                assets_component_1 = assets_component_1_1;
            },
            function (analytics_component_1_1) {
                analytics_component_1 = analytics_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            MainComponent = (function () {
                function MainComponent(_router, _routeParams) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this.currentTab = this._routeParams.get('tab');
                    if (this.currentTab != 'dashboard'
                        && this.currentTab != 'assets'
                        && this.currentTab != 'analytics') {
                        this._router.navigate(['Home', { tab: 'dashboard' }]);
                    }
                }
                MainComponent = __decorate([
                    core_1.Component({
                        selector: 'main',
                        template: "\n    <div [ngSwitch]=\"currentTab\">\n      <ul class=\"nav nav-tabs\">\n        <li role=\"presentation\" [ngClass]=\"{'active': currentTab == 'dashboard'}\">\n          <a [routerLink]=\"['Home', {tab: 'dashboard'}]\">Dashboard</a>\n        </li>\n        <li role=\"presentation\" [ngClass]=\"{'active': currentTab == 'assets'}\">\n          <a [routerLink]=\"['Home', {tab: 'assets'}]\">Assets</a>\n        </li>\n        <li role=\"presentation\" [ngClass]=\"{'active': currentTab == 'analytics'}\">\n          <a [routerLink]=\"['Home', {tab: 'analytics'}]\">Analytics</a>\n        </li>\n      </ul>\n      <!-- Find an alternative to 'ngSwitch and <template>' -->\n      <template [ngSwitchWhen]=\"'dashboard'\" ngSwitchDefault><dashboard></dashboard></template>\n      <template [ngSwitchWhen]=\"'assets'\"><assets></assets></template>\n      <template [ngSwitchWhen]=\"'analytics'\"><analytics></analytics></template>\n      <!-- -->\n\n    </div>\n  ",
                        directives: [dashboard_component_1.DashboardComponent, assets_component_1.AssetsComponent, analytics_component_1.AnalyticsComponent, router_1.RouterLink]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams])
                ], MainComponent);
                return MainComponent;
            }());
            exports_1("MainComponent", MainComponent);
        }
    }
});
//# sourceMappingURL=main.component.js.map