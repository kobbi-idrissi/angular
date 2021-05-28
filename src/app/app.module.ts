import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { ConnectionService } from 'ng-connection-service';
import { AppComponent,CountdownSnackbarComponent,CountdownService } from './app.component';
//import { WelcomeComponent } from './home/welcome.component';
import { UserModule } from './users/user.module';
import {LoginModule} from './login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileUploadModule } from './file-upload/file-upload.module';
//import { RFormModule } from './r-form/r-form.module';
import { MatToolbarModule } from "@angular/material/toolbar";
import { StateParameterService } from "./shared/st-parameter.service";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CookieService } from 'ngx-cookie-service';
//import {LoginComponent} from './r-form/r-form.component';
//import {DynamicFormComponent}from './r-form/dynamic-form.component';
import {LoginComponent} from './login/login.component';
//import { FormsModule,FormGroup}   from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    //LoginComponent,
   // LoginComponent1,
    //DynamicFormComponent,
    CountdownSnackbarComponent
  ],
  imports: [
    BrowserModule,
   
    
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: WelcomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]),
    UserModule,
    LoginModule,
   //RFormModule,
    FileUploadModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSnackBarModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  entryComponents: [
    CountdownSnackbarComponent,
  ],
  providers:[
    CountdownService,
    //DynamicFormComponent,
    StateParameterService,CookieService
  ],
  exports:[
    MatToolbarModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
