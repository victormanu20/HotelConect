import { Component, OnInit,ViewChild,HostListener } from '@angular/core';
import { Reservation } from 'src/app/app.models';
import { StoreService } from 'src/app/store.service';
@Component({
  selector: 'app-detail-reservation',
  templateUrl: './detail-reservation.component.html',
  styleUrls: ['./detail-reservation.component.scss']
})
export class DetailReservationComponent implements OnInit {
  public reserve:Reservation;
  @ViewChild('sidenav') sidenav: any;  
  @HostListener('window:resize')
  public onWindowResize():void {
    (window.innerWidth < 960) ? this.sidenavOpen = false : this.sidenavOpen = true; 
  }

  public sidenavOpen:boolean = true;

  constructor(
    public storeService:StoreService
  ) { }

  ngOnInit(): void {
    this.reserve= this.storeService.getReserve()
    if(window.innerWidth < 960){
      this.sidenavOpen = false;
      if(this.sidenav){
        this.sidenav.close();
      } 
    };
  }


}
