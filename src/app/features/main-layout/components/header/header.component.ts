import { Component } from '@angular/core';
import {AuthService} from "../../../../core/services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  get userIsAuthenticated() {
    return  this.authService.token
  }

  constructor(
    private authService: AuthService
  ) {
  }

  signOut() {
    this.authService.signOut()
  }

}
