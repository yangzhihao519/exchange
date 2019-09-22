import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { State, reducer, initialState } from '../reducers'
import { Action } from '../actions'

const store = createStore<State, Action, any, any>(reducer, initialState, applyMiddleware(logger))

export default store