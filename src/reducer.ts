import { combineReducers } from 'redux'
import employees, { EmployeesState } from '~/reducers/employees'

export type RootState = {
  employees: EmployeesState
}

const reducer = combineReducers({
  employees,
})

export default reducer
