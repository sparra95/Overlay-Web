import {Component, Output, EventEmitter} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router'

@Component({
    selector: 'login',
    template: `
      <div style="width:80%;margin:auto;padding:20px 100px;">
        <h1>Overlay in Angular 2</h1>
        <h4>Admin Portal</h4>
        <form #form="ngForm" (ngSubmit)="authenticate(form)">
        <!-- if using ngControl, add #username="ngForm" to proper tag; same with password -->
          <div class="form-group">
            <label for="username">Username</label>
            <input ngControl="username" id="username" class="form-control" type="text" [(ngModel)]="client.username" />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input ngControl="password" id="password" class="form-control" input="text" [(ngModel)]="client.password" />
          </div>
          <button class="btn btn-default" type="submit" ngDisabled="username.invalid || password.invalid">Login</button>
        </form>
      </div>
    `,
    directives: [ROUTER_DIRECTIVES]
})
export class LoginComponent {
  // TODO: Better to use ngControl or ngModel for forms?
  // TODO: Validate forms, cannot submit empty fields -> add 'required' to input fields
  client = {
    username: '',
    password: ''
  }

  constructor(private _router: Router) {

  }

  authenticate(form) {
    // TODO: Authenticate the user; use login.service; on success, route to home/dashboard
    console.log("Submitted: ", this.client);
    this._router.navigate(['Home', {tab: 'dashboard'}]);
  }
}
