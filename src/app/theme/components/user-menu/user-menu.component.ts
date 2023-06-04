import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {
  public userData;
  constructor(public appService:AppService, public authService:AuthService) { }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData'));

  }

  logOut(){
    this.authService.logout()
  }

}
