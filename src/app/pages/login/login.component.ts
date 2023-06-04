import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router'; 
import { AppService } from '../../app.service'; 
import {AuthService} from '../../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: UntypedFormGroup;
  public hide = true;
  public message='';
  constructor(public fb: UntypedFormBuilder, public router:Router,public appService:AppService, private authService:AuthService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      rememberMe: false
    });
  }



  public onLoginFormSubmit(values:Object):void {
    if (this.loginForm.valid) {
      let success= this.authService.login(this.loginForm.value.username,this.loginForm.value.password)
      if(success){
        this.router.navigate(['/']);
      }else{
        this.message= 'Correo o ontranseña incorrectos';
      }
    }
  }

}
