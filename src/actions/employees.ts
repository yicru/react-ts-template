import {
  EMPLOYEES_FETCH_REQUESTED,
  EMPLOYEES_FETCH_SUCCEEDED,
} from '~/constants/actionTypes'
import { Employee } from '~/reducers/employees'

export const employeesFetchRequested = (): { type: string } => {
  return { type: EMPLOYEES_FETCH_REQUESTED }
}

export const employeesFetchSucceeded = (
  employees: Array<Employee>
): { type: string; payload: { employees: Array<Employee> } } => {
  return {
    type: EMPLOYEES_FETCH_SUCCEEDED,
    payload: { employees },
  }
}
