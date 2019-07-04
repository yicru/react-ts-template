import * as React from 'react'
import { Employee, EmployeesState } from '~/reducers/employees'

type ContentsProps = {
  employees: Array<Employee>
}

const EmployeesContents: React.FC<ContentsProps> = props => (
  <React.Fragment>
    <table>
      <tbody>
        {props.employees.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.employee_name}</td>
            <td>{item.employee_age}</td>
            <td>{item.employee_salary}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </React.Fragment>
)

export type StateProps = {
  employees: EmployeesState
}
export type DispatchProps = {
  dispatchEmployeesFetchRequested: () => void
}
type Props = StateProps & DispatchProps

const Employees: React.FC<Props> = props => (
  <div>
    <button
      onClick={() => props.dispatchEmployeesFetchRequested()}
      className="button"
    >
      Fetch
    </button>
    <EmployeesContents employees={props.employees.employees} />
  </div>
)

export default Employees
