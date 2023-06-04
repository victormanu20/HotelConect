import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  public psConfig: PerfectScrollbarConfigInterface = {
    wheelPropagation:true
  };
  @ViewChild('sidenav') sidenav: any;
  public sidenavOpen:boolean = true;
  public userData:any;
  public links = [
    { name: 'PROFILE', href: 'profile', icon: 'person' },
    { name: 'MY_HOTELS', href: 'my-hotels', icon: 'view_list' },
    { name: 'MY_RESERVATIONS', href: 'reserve', icon: 'favorite' },
    { name: 'REGISTER_HOTEL', href: '/create-hotel', icon: 'add_circle' },
    { name: 'LOGOUT', href: '/login', icon: 'power_settings_new' }
  ]; 
  constructor(public router:Router) { }

  ngOnInit() {
    if(window.innerWidth < 960){
      this.sidenavOpen = false;
    };
    this.userData = JSON.parse(localStorage.getItem('userData'))
  }

  @HostListener('window:resize')
  public onWindowResize():void {
    (window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true;
  }

  ngAfterViewInit(){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {  
        if(window.innerWidth < 960){
          this.sidenav.close(); 
        }
      }                
    });
  } 


}
