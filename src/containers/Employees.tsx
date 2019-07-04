import { connect } from 'react-redux'
import * as React from 'react'

import Employees, { DispatchProps, StateProps } from '~/components/Employees'
import { employeesFetchRequested } from '~/actions/employees'
import { Dispatch } from 'redux'
import { RootState } from '~/reducer'

const mapStateToProps = (state: RootState): StateProps => ({
  employees: state.employees,
})

function mapDispatchToProps(dispatch: Dispatch): DispatchProps {
  return {
    dispatchEmployeesFetchRequested: () => {
      dispatch(employeesFetchRequested())
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Employees)
