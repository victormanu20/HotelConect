import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { emailValidator } from 'src/app/theme/utils/app-validators';
import { AppService } from '../../app.service'; 

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public contactForm: UntypedFormGroup;
  public contactReserve:UntypedFormGroup;
  public lat: number = 40.678178;
  public lng: number = -73.944158;
  public zoom: number = 12; 
  public stateTransaction;
  public users=[];
  public optionsGender=[];
  public optionsDocument=[];
  constructor(public formBuilder: UntypedFormBuilder,public fb: UntypedFormBuilder,public appService:AppService) { }


  ngOnInit() {
    this.stateTransaction=JSON.parse(localStorage.getItem('stateTransaction'));
    this.optionsGender = this.appService.getGender();
    this.optionsDocument = this.appService.getOptionsDocument();
    this.contactReserve = this.fb.group({
      name: ['', Validators.required],
      gender:null,
      date:null,
      typeDocument:null,
      numDocument:['', Validators.required],
      email: ['', Validators.compose([Validators.required, emailValidator])],
      phone: ['', Validators.required],
      nameEmergency:['', Validators.required],
      phoneEmergency: ['', Validators.required]
    })
    for (let index = 0; index < this.stateTransaction.numAdults; index++) {
      this.users.push(
        this.contactForm = this.fb.group({
          name: ['', Validators.required],
          gender:null,
          date:null,
          typeDocument:null,
          numDocument:['', Validators.required],
          email: ['', Validators.compose([Validators.required, emailValidator])],
          phone: ['', Validators.required],
          nameEmergency:['', Validators.required],
          phoneEmergency: ['', Validators.required]
        })
      )
    }

    
  }

  public onContactFormSubmit(values:Object):void {
    if (this.contactForm.valid) {
    }
  }

}
