import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, ViewChild, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Settings, AppSettings } from '../app.settings';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  @ViewChild('sidenav') sidenav:any;  
  public toolbarTypes = [1, 2];
  public toolbarTypeOption:number;
  public searchPanelVariants = [1, 2, 3];
  public searchPanelVariantOption:number;
  public headerFixed: boolean = false;
  public showBackToTop: boolean = false;
  public scrolledCount = 0;

  public settings: Settings;
  constructor(public appSettings:AppSettings, public router:Router, @Inject(PLATFORM_ID) private platformId: Object) {
    this.settings = this.appSettings.settings;  
  }

  ngOnInit() {
  }
  
  public changeTheme(theme){
    this.settings.theme = theme;       
  }


  public chooseHeaderType(){
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0,0);
    }
    this.router.navigate(['/']);
  }





  public scrollToTop(){
    var scrollDuration = 200;
    var scrollStep = -window.pageYOffset  / (scrollDuration / 20);
    var scrollInterval = setInterval(()=>{
      if(window.pageYOffset != 0){
         window.scrollBy(0, scrollStep);
      }
      else{
        clearInterval(scrollInterval); 
      }
    },10);
    if(window.innerWidth <= 768){
      setTimeout(() => { 
        if (isPlatformBrowser(this.platformId)) {
          window.scrollTo(0,0);
        } 
      });
    }
  }


 

}
