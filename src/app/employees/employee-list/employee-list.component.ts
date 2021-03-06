import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employeeList : Employee[];

  constructor(public employeeService : EmployeeService, private toastr : ToastrService) { }

  ngOnInit() {
      var x = this.employeeService.getData();
      x.snapshotChanges().subscribe(item => {
      this.employeeList = [];
      item.forEach(element => {
          var y = element.payload.toJSON();
          y["$key"] = element.key;
          this.employeeList.push(y as Employee);
        });
      });
  }

  onEdit(emp : Employee){
    //this.employeeService.selectedEmployee = emp; // see changes as edit
    this.employeeService.selectedEmployee = Object.assign({},emp);
  }

  onDelete(key : string){
    if (confirm('Do you want to delete this record ?') == true){
      this.employeeService.deleteEmployee(key);
      this.toastr.warning('','Employee Delete Success');
    }
  }

}
