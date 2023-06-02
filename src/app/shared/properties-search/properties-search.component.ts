import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { AppService } from '../../app.service'; 
import {FormGroup, FormControl} from '@angular/forms';



@Component({
  selector: 'app-properties-search',
  templateUrl: './properties-search.component.html',
  styleUrls: ['./properties-search.component.scss']
})
export class PropertiesSearchComponent implements OnInit {
  @Input() variant:number = 1;
  @Input() vertical:boolean = false;
  @Input() searchOnBtnClick:boolean = false;
  @Input() removedSearchField:string;
  @Output() onSearchChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() onSearchClick: EventEmitter<any> = new EventEmitter<any>();
  public showMore: boolean = false;
  public form: UntypedFormGroup;
  public propertyTypes = [];
  public propertyStatuses = [];
  public cities = [];
  public neighborhoods = [];
  public streets = [];
  public features = [];
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  constructor(public appService:AppService, public fb: UntypedFormBuilder) { }

  ngOnInit() {
    if(this.vertical){
      this.showMore = true;
    };

    this.cities = this.appService.getCities();
    this.form = this.fb.group({
      range: this.fb.group({
        start:  new FormControl<Date | null>( new Date()),
        end: new FormControl<Date | null>(null) 
      }),
      city: null,
      numAdults: 1,
      // numKids: null,
    }); 

    this.onSearchChange.emit(this.form);

  }
 
  public buildFeatures() {
    const arr = this.features.map(feature => { 
      return this.fb.group({
        id: feature.id,
        name: feature.name,
        selected: feature.selected
      });
    })   
    return this.fb.array(arr);
  }
  

  ngOnChanges(){ 
    if(this.removedSearchField){ 
      if(this.removedSearchField.indexOf(".") > -1){
        let arr = this.removedSearchField.split(".");
        this.form.controls[arr[0]]['controls'][arr[1]].reset();
      } 
      else if(this.removedSearchField.indexOf(",") > -1){        
        let arr = this.removedSearchField.split(","); 
        this.form.controls[arr[0]]['controls'][arr[1]]['controls']['selected'].setValue(false);  
      }
      else{
        this.form.controls[this.removedSearchField].reset();
      }  
    }  
  }

  public reset(){     
    this.form.reset({ 
      range: this.fb.group({
        start:  null,
        end: null
      }),
      city: null,
      numAdults: null,
      numKids: null, 
    }); 
  }

  public search(){
    console.log(this.form)
    this.onSearchClick.emit(); 
  }


  public onSelectCity(){
    this.form.controls['neighborhood'].setValue(null, {emitEvent: false});
    this.form.controls['street'].setValue(null, {emitEvent: false});
  }
  public onSelectNeighborhood(){
    this.form.controls['street'].setValue(null, {emitEvent: false});
  }

  public getAppearance(){
    return (this.variant != 3) ? 'outline' : '';
  }
  public getFloatLabel(){
    return (this.variant == 1) ? 'always' : '';
  }


}
