import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../shared/employee.model';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  id:any
  data:any
 
  employee = new Employee
  constructor(private employeeService:EmployeeService, private route:ActivatedRoute, private formbuilder:FormBuilder, private router:Router) { }

  contactform = new FormGroup({
    FirstName:new FormControl(''),
    LastName:new FormControl(''),
    Phone:new FormControl('')
  })

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id 
    this.getData()
  }

  createForm(){
    this.contactform = this.formbuilder.group({
      FirstName:['',Validators.required],
      LastName:['',Validators.required],
      Phone:['',Validators.required],
    })
  }

  getData(){
    this.employeeService.editContact(this.id).subscribe(res =>{
      this.data = res
      this.employee = this.data
      this.contactform = new FormGroup({
        FirstName:new FormControl(this.employee.FirstName),
        LastName:new FormControl(this.employee.LastName),
        Phone:new FormControl(this.employee.Phone)

      })
    })
  }

  navi(){
    this.router.navigate([''])
  }
  onUpdate(){
    this.employeeService.UpdateContact(this.id,this.contactform.value).subscribe(res =>{
    
      
     
      this.data = res
      console.log(this.data);
     
      this.createForm();
      this.navi()
      
    })
  }

}
