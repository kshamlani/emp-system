import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { EmployeeService } from '../shared/employee.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(public employeeService : EmployeeService, private toastr : ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(employeeForm : NgForm){
    if(employeeForm.value.$key == null){
      this.employeeService.insertEmployee(employeeForm.value);
      this.resetForm(employeeForm);
      this.toastr.success('','Employee Register Success');
    } else {
      this.employeeService.updateEmployee(employeeForm.value);
      this.resetForm(employeeForm);
      this.toastr.success('','Employee Update Success');
    }
  }

  resetForm(employeeForm? : NgForm){
    if(employeeForm != null)
      employeeForm.reset();
    this.employeeService.selectedEmployee = {
      $key : null,
      name : '',
      position : '',
      office : '',
      salary : ''
    }
  }

}
