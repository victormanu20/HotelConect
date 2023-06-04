import { Injectable } from '@angular/core';
import { Reservation } from './app.models';


@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private reserve:Reservation;

  addReserve(reserve:Reservation){
    this.reserve =reserve
  }

  getReserve(){
    return this.reserve;
  }

}
