import { State } from '../reducers'
import { createSelector } from 'reselect'

const getExchangeState = ((state: State) => state.exchange)

export const getSellOutExchange = createSelector([getExchangeState], s => s.sellOut)
export const getBuyInExchange = createSelector([getExchangeState], s => s.buyIn)
export const getInitBalances = createSelector([getExchangeState], s => s.initBalances)
export const getAllCurrencies = createSelector([getExchangeState], s=> s.allCurrencies)
