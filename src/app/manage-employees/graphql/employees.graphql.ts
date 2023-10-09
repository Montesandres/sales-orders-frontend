import { gql } from 'apollo-angular';
import { Employee } from '../interfaces/employee.interface';

export const queryEmployees = gql<Employee[], null>(`
    query Employee {
        employees {
            id
            name
            lastName
            documentNumber
            address
            neighborhood
        }
    }
`)