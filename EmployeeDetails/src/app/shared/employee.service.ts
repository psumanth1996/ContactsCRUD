import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Employee } from './employee.model';

@Injectable({
  providedIn:'root'
})
export class EmployeeService {
  selectedEmployee:Employee
  employees:Employee[]
  
  constructor(private http:HttpClient) { }

  getContacts(){
    return this.http.get('http://localhost:3000/employee/list') 
  }

  addContact(newContact){
    
    return this.http.post('http://localhost:3000/employees',newContact)
  }
  
  editContact(id){
    return this.http.get(`http://localhost:3000/employee/${id}`)
  }

  UpdateContact(id, data){
    return this.http.patch(`http://localhost:3000/employee/${id}`, data)
  }

  deleteContact(id){
    return this.http.delete(`http://localhost:3000/employee/${id}`)
  }
}
