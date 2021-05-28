import { NgModule } from '@angular/core';
import { RouterModule,Router } from '@angular/router';
import {LoginComponent} from './login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table'
import {ReactiveFormsModule,FormsModule,FormGroup,FormControl } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
   
    LoginComponent
  ],
  imports: [
    MatFormFieldModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    //FormGroup,
    MatInputModule,
    CommonModule,
   
    MatProgressSpinnerModule,
    RouterModule.forChild([
      { path: 'login', component: LoginComponent }, 
    ])
    ],
  providers:[
  //  FormsModule,
    ],
  exports:[
    MatTableModule,
    MatFormFieldModule
  ]
})
export class LoginModule { }