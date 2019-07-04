import axios from 'axios'
import { employeesFetchSucceeded } from '~/actions/employees'
import { call, fork, takeLatest, put } from 'redux-saga/effects'
import { EMPLOYEES_FETCH_REQUESTED } from '~/constants/actionTypes'

function fetchEmployees() {
  const URL = 'http://dummy.restapiexample.com/api/v1/employees'
  return axios.get(URL).then(res => res)
}

export function* employeesFetchRequestedSaga() {
  const { data } = yield call(fetchEmployees)
  yield put(employeesFetchSucceeded(data))
}

export default function* rootSaga() {
  yield takeLatest(EMPLOYEES_FETCH_REQUESTED, employeesFetchRequestedSaga)
}
