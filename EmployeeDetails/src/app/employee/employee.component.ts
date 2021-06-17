import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';

import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  
})
export class EmployeeComponent implements OnInit {
  // employeeForm:FormGroup
  employees:any;// this variable is creted so that we can asign it to the datas that we are getting from the database
  editMode = false
  contactform:FormGroup;
  data:any;
  constructor(private employeeService:EmployeeService, private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.getContacts();
    this.createForm();
  }
  createForm(){
    this.contactform = this.formbuilder.group({
      FirstName:['',Validators.required],
      LastName:['',Validators.required],
      Phone:['',Validators.required],
    })
  }
  onSubmit(){
      if (this.contactform.invalid){
        return 
      }
      this.employeeService.addContact(this.contactform.value).subscribe(res =>{
        this.data = res;
       
        this.getContacts();
        this.createForm();
      })
    }


    getContacts(){
      this.employeeService.getContacts().subscribe(res =>{
        console.log(res);
        this.employees = res
      })
    }

    onDelete(id){
      
           
                   this.employeeService.deleteContact(id).subscribe(res =>{
                  this.data = res
                  console.log(this.data);
                  this.getContacts()
                })
            
    }
    
    

   
}
