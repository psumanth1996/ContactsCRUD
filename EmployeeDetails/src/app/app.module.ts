import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';

import { EditContactComponent } from './edit-contact/edit-contact.component';
import { Routes,RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';

const routes :Routes = [
  {
    path:'',component:EmployeeComponent
  },
 
  {
    path:'edit/:id',component:EditContactComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EditContactComponent,
         HeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
