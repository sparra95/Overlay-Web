import {Component} from 'angular2/core';
import {DashboardComponent} from './pages/dashboard.component';
import {AssetsComponent} from './pages/assets.component';
import {AnalyticsComponent} from './pages/analytics.component';
import {Router, RouterLink, RouteParams} from 'angular2/router';

@Component({
  selector: 'main',
  template: `
    <div [ngSwitch]="currentTab">
      <ul class="nav nav-tabs">
        <li role="presentation" [ngClass]="{'active': currentTab == 'dashboard'}">
          <a [routerLink]="['Home', {tab: 'dashboard'}]">Dashboard</a>
        </li>
        <li role="presentation" [ngClass]="{'active': currentTab == 'assets'}">
          <a [routerLink]="['Home', {tab: 'assets'}]">Assets</a>
        </li>
        <li role="presentation" [ngClass]="{'active': currentTab == 'analytics'}">
          <a [routerLink]="['Home', {tab: 'analytics'}]">Analytics</a>
        </li>
      </ul>
      <!-- Find an alternative to 'ngSwitch and <template>' -->
      <template [ngSwitchWhen]="'dashboard'" ngSwitchDefault><dashboard></dashboard></template>
      <template [ngSwitchWhen]="'assets'"><assets></assets></template>
      <template [ngSwitchWhen]="'analytics'"><analytics></analytics></template>
      <!-- -->

    </div>
  `,
  directives: [DashboardComponent, AssetsComponent, AnalyticsComponent, RouterLink]
})
export class MainComponent {
  currentTab; // = 'dashboard';

  constructor(private _router: Router, private _routeParams: RouteParams) {
    this.currentTab = this._routeParams.get('tab');
    if (this.currentTab != 'dashboard'
      && this.currentTab != 'assets'
      && this.currentTab != 'analytics') {
      this._router.navigate(['Home', {tab: 'dashboard'}]);
    }
  }
}
