import { Component, inject } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Token } from 'src/app/auth/interface/token.interface';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  sidebarVisible: boolean = false;

  private authService = inject(AuthService)

  get token():Token|undefined{
    return this.authService.currentToken;
  }

  logOut(){
    this.authService.logOut()
  }
}
