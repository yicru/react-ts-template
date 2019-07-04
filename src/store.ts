import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import reducer from './reducer'
import createSagaMiddleware from '@redux-saga/core'
import rootSaga from '~/sagas/api'

const sagaMiddleware = createSagaMiddleware()

const configureStore = () => {
  let middleware
  if (process.env.NODE_ENV === 'production') {
    middleware = applyMiddleware(sagaMiddleware)
  } else {
    middleware = applyMiddleware(sagaMiddleware, createLogger())
  }

  const store = createStore(reducer, composeWithDevTools(middleware))

  sagaMiddleware.run(rootSaga)
  return store
}

export default configureStore
