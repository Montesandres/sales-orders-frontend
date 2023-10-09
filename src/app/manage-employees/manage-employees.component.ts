import { Component, inject } from '@angular/core';
import { ManageEmployeesService } from './manage-employees.service';
import { Employee } from './interfaces/employee.interface';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-manage-employees',
  templateUrl: './manage-employees.component.html',
  styleUrls: ['./manage-employees.component.css'],
})
export class ManageEmployeesComponent {
  manageEmployeeService = inject(ManageEmployeesService);
  employees:Employee[] = [];

  loading = false;

  ngOnInit() {
    this.getAllEmployees();
  }

  async getAllEmployees() {
    try {
      this.employees= await this.manageEmployeeService.getAllEmployees();
    } catch (error) {
      console.log(error);
    }
  }

  clear(table: Table) {
    table.clear();
  }
}
