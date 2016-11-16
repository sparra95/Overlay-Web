import {Component} from 'angular2/core';
import {AssetService} from '../services/asset.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {OnInit} from 'angular2/core';
import {Router, RouterLink, RouteParams} from 'angular2/router';

@Component({
  selector: 'asset-detail',
  template: `
    <div>
      <iframe src="{url}" width="800" height="600" allowfullscreen></iframe>
    </div>
  `,
  providers: [AssetService, HTTP_PROVIDERS]
})
export class AssetDetailComponent {
  id;
  url;

  constructor(private _routeParams: RouteParams) {
    this.id = this._routeParams.get('id');
    this.url = "https://clara.io/embed/"+this.id+"?renderer=webgl";
    console.log("URL: ", this.url);
  }
}
