import { Component, OnInit, Input, ViewChild, SimpleChange } from '@angular/core';
import { SwiperDirective, SwiperConfigInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper'; 
import { Property } from '../../app.models';
import { Settings, AppSettings } from '../../app.settings';

import { AppService } from '../../app.service'; 
import { CompareOverviewComponent } from '../compare-overview/compare-overview.component'; 

@Component({
  selector: 'app-property-item',
  templateUrl: './property-item.component.html',
  styleUrls: ['./property-item.component.scss'] 
})
export class PropertyItemComponent implements OnInit {
  @Input() property: Property;
  @Input() searchFields: any;
  @Input() viewType: string = "grid";
  @Input() viewColChanged: boolean = false; 
  @Input() fullWidthPage: boolean = true;   

  public column:number = 4;

  public stateTransaction={
    priceTotalSimple:0,
    priceTotalDuo:0,
    dayStay:0,
    numAdults:0
  };
  // public address:string; 
  @ViewChild(SwiperDirective) directiveRef: SwiperDirective;
  public config: SwiperConfigInterface = {};
  private pagination: SwiperPaginationInterface = {
    el: '.swiper-pagination',
    clickable: true
  };
  public settings: Settings;
  constructor(public appSettings:AppSettings, public appService:AppService) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    console.log(this.property)
    this.calculateDate();
   }

  ngAfterViewInit(){
    this.initCarousel();
    // this.appService.getAddress(this.property.location.lat, this.property.location.lng).subscribe(data=>{
    //   console.log(data['results'][0]['formatted_address']);
    //   this.address = data['results'][0]['formatted_address'];
    // })
  } 
 
  ngOnChanges(changes: {[propKey: string]: SimpleChange}){  
    if(changes.viewColChanged){
      this.getColumnCount(changes.viewColChanged.currentValue);
      if(!changes.viewColChanged.isFirstChange()){
        if(this.property.gallery.length > 1){     
           this.directiveRef.update();  
        } 
      }
    } 



    for (let propName in changes) {      
      // let changedProp = changes[propName];
      // if (!changedProp.isFirstChange()) {
      //   if(this.property.gallery.length > 1){
      //     this.initCarousel();
      //     this.config.autoHeight = true;       
      //     this.directiveRef.update();  
      //   }       
      // }      
    }  
  }

  public calculateDate(){
    const {start,end}=this.searchFields.range
    console.log("calcu",this.searchFields)
    const fecha1 = start;
    const fecha2 = end;
    
    const diferenciaEnMilisegundos = new Date(fecha2).getTime() - new Date(fecha1).getTime();
    this.stateTransaction.dayStay = Math.floor(diferenciaEnMilisegundos / (1000 * 60 * 60 * 24))+1;
    this.stateTransaction.priceTotalSimple= (this.property.singleRoomPrice *  this.stateTransaction.dayStay) * this.searchFields.numAdults;
    this.stateTransaction.priceTotalDuo= (this.property.doubleRoomPrice *  this.stateTransaction.dayStay) * Math.ceil(this.searchFields.numAdults/2);

  }

  selectedProperty(){
    this.stateTransaction.numAdults= this.searchFields.numAdults

    localStorage.setItem('stateTransaction',JSON.stringify(this.stateTransaction))
  }

  public getColumnCount(value){
    if(value == 25){
      this.column = 4;
    }
    else if(value == 33.3){
      this.column = 3;
    }
    else if(value == 50){
      this.column = 2
    }
    else{
      this.column = 1;
    }
  }

  public getStatusBgColor(status){
    switch (status) {
      case 'For Sale':
        return '#558B2F';  
      case 'For Rent':
        return '#1E88E5'; 
      case 'Open House':
        return '#009688';
      case 'No Fees':
        return '#FFA000';
      case 'Hot Offer':
        return '#F44336';
      case 'Sold':
        return '#000';
      default: 
        return '#01579B';
    }
  }


  public initCarousel(){
    this.config = {
      slidesPerView: 1,
      spaceBetween: 0,         
      keyboard: false,
      navigation: true,
      pagination: this.pagination,
      grabCursor: true,        
      loop: true,
      preloadImages: false,
      lazy: true,  
      nested: true,
      // autoplay: {
      //   delay: 5000,
      //   disableOnInteraction: false
      // },
      speed: 500,
      effect: "slide"
    }
  }
  



  public onCompare(){
    return this.appService.Data.compareList.filter(item=>item.id == this.property.id)[0];
  }



  public onFavorites(){
    return this.appService.Data.favorites.filter(item=>item.id == this.property.id)[0];
  }


}
