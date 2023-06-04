import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Property, Reservation } from 'src/app/app.models';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataRowOutlet } from '@angular/cdk/table';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { StoreService } from 'src/app/store.service';
import {DetailReservationComponent} from '../../../theme/components/detail-reservation/detail-reservation.component'
@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.scss']
})
export class reserveComponent implements OnInit {
  displayedColumns: string[] = ['id', 'reservation_date', 'name_person','name_hotel', 'actions' ];
  reservations:Reservation[];
  dataSource: MatTableDataSource<Reservation>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  constructor(public appService:AppService,public dialog: MatDialog,public storeService:StoreService) { }

  ngOnInit() {
    this.getReservations()
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }
  openDialog(resserve:Reservation) {
    this.storeService.addReserve(resserve)
    const dialogRef = this.dialog.open(DetailReservationComponent);

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  public getReservations(){  
    //console.log('get properties by : ', this.searchFields);  
    this.appService.getReservations().subscribe(data => {      
      this.reservations=data
      this.initDataSource()
    })
  }

  public initDataSource(){
    this.dataSource = new MatTableDataSource<Reservation>(this.reservations);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  } 


  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}