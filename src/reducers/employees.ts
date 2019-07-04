import { EMPLOYEES_FETCH_SUCCEEDED } from '~/constants/actionTypes'
import { Action } from 'redux'

export type Employee = {
  id: number
  employee_name: string
  employee_salary: number
  employee_age: number
}
type Employees = Array<Employee>

type EmployeesAction = {
  payload?: {
    employees?: Employees
  }
} & Action<string>

export type EmployeesState = {
  employees: Employees
}

export const initialState: EmployeesState = {
  employees: [],
}

export default function employees(
  state = initialState,
  action: EmployeesAction
): EmployeesState {
  switch (action.type) {
    case EMPLOYEES_FETCH_SUCCEEDED:
      if (action.payload == null) return state
      if (action.payload.employees == null)
        action.payload.employees = initialState.employees
      return {
        ...state,
        employees: action.payload.employees,
      }

    default:
      return state
  }
}
