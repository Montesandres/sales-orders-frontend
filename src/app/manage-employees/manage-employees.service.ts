import { Injectable, inject } from '@angular/core';
import { GraphqlService } from '../common/graphql-service.service';
import { Employee } from './interfaces/employee.interface';
import { firstValueFrom } from 'rxjs';
import { queryEmployees } from './graphql/employees.graphql';

@Injectable({
  providedIn: 'root'
})
export class ManageEmployeesService {

  graphqlService = inject(GraphqlService);

  async getAllEmployees(): Promise<Employee[]> {
    return firstValueFrom(
      this.graphqlService.query({
        query: queryEmployees,
      })
    );
  }


}
