import {Component} from 'angular2/core';
import {AssetService} from '../services/asset.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {OnInit} from 'angular2/core';
import {Router, RouterLink, RouteParams} from 'angular2/router';

@Component({
  selector: 'assets',
  template: `
    <div>
      <h2 style="text-align:center">Assets Page</h2>

        <!-- --
        <div style="text-align:center;margin:10 auto" (click)="onClick($event)" *ngFor="#model of models">
          <iframe src="{{model.thumbnail}}" width="640" height="480" allowfullscreen></iframe>
        </div><!-- -->

        <div class="media" style="margin:5 5" *ngFor="#model of models">
          <div class="media-left">
            <iframe src="{{media(model)}}" width="640" height="480" allowfullscreen></iframe>
          </div>
          <div class="media-body">
            <h4 class="media-heading">Media Heading</h4>
            <div>Media Body</div>
            <div class="btn-group" role="group">
              <button class="btn btn-default" [class.disabled]="model.interactive" (click)="model.interactive = true">Interactive</button>
              <button class="btn btn-default" [class.disabled]="!model.interactive" (click)="model.interactive = false">Static</button>
            </div>
          </div>
        </div>
    </div>
  `,
  directives: [RouterLink],
  providers: [AssetService, HTTP_PROVIDERS]
})
export class AssetsComponent {
  models = [];
  interactiveMode = [];

  constructor(private _assetService: AssetService, private _router: Router) {

  }

  ngOnInit() {
    //this._assetService.getData().subscribe(rsp => {console.log(rsp);});
    this.models = this._assetService.getModels();
    //console.log(this.models);
  }

  media(model) {
    if (model.interactive) {
      return model.render;
    }
    else {
      return model.thumbnail;
    }
  }
  toggleMode(model) {
    model.interactive = !model.interactive;
  }
}
