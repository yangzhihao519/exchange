import { combineReducers } from 'redux'
import * as exchange from './exchange'

export interface State {
    exchange: exchange.State
}

export const initialState: State = {
    exchange: exchange.initialState
}

export const reducer = combineReducers<State>({
    exchange: exchange.reducer
})