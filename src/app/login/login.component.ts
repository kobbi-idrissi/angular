import {Component } from '@angular/core'
import { Router } from '@angular/router'
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { StateParameterService } from "../shared/st-parameter.service";
import { takeUntil } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { EventService } from '../shared/event.service';
import { Subject } from 'rxjs';
//import { AuthService } from './auth.service'
@Component({
templateUrl:'./login.component.html',
styleUrls:['./login.component.css']
})
export class LoginComponent{
    firstName;
    lastName;
    address;
    cin;
    sexe;
    
   //form: FormGroup;
    destroy$: Subject<boolean> = new Subject<boolean>();
    
  constructor(private stService :StateParameterService,private router:Router,private http: HttpClient){
  }

   
    login(formValues){
       // this.authService.loginUser(formValues.userName,formValues.password)
       //const obj= this.form.getRawValue();
       console.log(formValues)
      formValues["_id"]= "dossier_"+formValues['cin'];
      this.http.post(this.stService.host+'/api/form', formValues).pipe(takeUntil(this.destroy$)).subscribe(data => {
        this.stService.id=formValues['_id'];//JSON.stringify(data);
        this.stService.login=formValues['Firstname'];
         //if(this.stService.host==EventService.local)
         this.stService.busy.emit(true);
         
         setTimeout(() =>
         {
           this.router.navigate(["/login/pic"]);
         },
         1000);
       });
       
    }
    cancel(){

    }

}