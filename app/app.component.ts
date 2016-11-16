import {Component} from 'angular2/core'
import {LoginComponent} from './login.component'
import {MainComponent} from './main.component'
import {AssetsComponent} from './pages/assets.component'
import {AssetDetailComponent} from './pages/asset-detail.component'
import {AnalyticsComponent} from './pages/analytics.component'
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'

@RouteConfig([
  {path: '/login', name: 'Login', component: LoginComponent, useAsDefault: true},
  {path: '/home/:tab', name: 'Home', component: MainComponent},
  {path: '/home/assets/:id', name: 'Asset-Detail', component: AssetDetailComponent},
  {path: '/*other', name: 'Other', redirectTo: ['Login']}
])
@Component({
    selector: 'my-app',
    directives: [LoginComponent, MainComponent, ROUTER_DIRECTIVES],
    template: `
      <div style="background-color:#FFF">
        <router-outlet></router-outlet>
      </div>
    `
})
export class AppComponent {

}
