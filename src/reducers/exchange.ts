import Money from '../models/money'
import { ActionTypes, Action } from '../actions'
import Currency from '../models/currency';

const OPEN_EXCHANGE_RATES_APP_ID = '144b758706f04d23817d346d321e63d7'

export interface State{
    initBalances: Money[],
    sellOut: Money,
    buyIn: Money,
    allCurrencies: Currency[]
}

export const initialState: State = {
    initBalances: [
        {currencyCode: 'GBP', value: 100},
        {currencyCode: 'EUR', value: 0},
        {currencyCode: 'USD', value: 0},
        {currencyCode: 'CHF', value: 0},
        {currencyCode: 'CNY', value: 0}
    ],
    sellOut: { currencyCode: 'GBP', value: 0 },
    buyIn: { currencyCode: 'EUR', value: 0 },
    allCurrencies: [
        {code: 'GBP', symbol: '£', rate: 0.8},
        {code: 'EUR', symbol: '€', rate: 0.91},
        {code: 'USD', symbol: '$', rate: 1},
        {code: 'CHF', symbol: 'CHF', rate: 0.99},
        {code: 'CNY', symbol: '¥', rate: 7.09}
    ]
}

export function reducer(state: State = initialState, action: Action){
    switch (action.type){

        // When new input value is received, update other value field
        case ActionTypes.CHANGE_EXCHANGE_VALUE: {
            let exchangeValue = action.payload.value
            let isSellingOut = action.payload.isSellingOut
            let newState = state
            let sellOutCurrency = state.allCurrencies.find((item) => {return item.code === state.sellOut.currencyCode})
            let buyInCurrency = state.allCurrencies.find((item) => {return item.code === state.buyIn.currencyCode})

            if(sellOutCurrency && buyInCurrency){
                if(isSellingOut){
                    newState.sellOut.value = round(exchangeValue, 2)
                    newState.buyIn.value = round(exchangeValue / sellOutCurrency.rate * buyInCurrency.rate, 2)
                }else{
                    newState.sellOut.value = round(exchangeValue / buyInCurrency.rate * sellOutCurrency.rate, 2)
                    newState.buyIn.value = round(exchangeValue, 2)
                }
            }

            return Object.assign({}, state, newState)
        }

        // Confirm an exchange
        case ActionTypes.CONFIRM_EXCHANGE: {
            let newState = state

            newState.initBalances = newState.initBalances.map((item) => {
                let newItem = item
                if(item.currencyCode === state.sellOut.currencyCode){
                    newItem.value = round(item.value - state.sellOut.value, 2)
                }else if (item.currencyCode === state.buyIn.currencyCode){
                    newItem.value = round(item.value + state.buyIn.value, 2)
                }else{
                    // do nothing
                }
                return newItem
            })

            newState.buyIn.value = 0
            newState.sellOut.value = 0

            return Object.assign({}, state, newState)
        }

        //Switch the exchanging pockets
        case ActionTypes.SWITCH_EXCHANGE: {
            let newState = state
            let oldSellOut = state.sellOut
            let oldBuyIn = state.buyIn

            newState.buyIn = oldSellOut
            newState.sellOut = oldBuyIn

            return Object.assign({}, state, newState)
        }

        // Select a new currency
        case ActionTypes.SELECT_CURRENCY: {
            let newState = state
            let selectedCurrency = state.allCurrencies.find((item) => {return item.code === action.payload.selectedCurrencyCode})

            if(selectedCurrency){
                if(action.payload.isSellingOut){
                    newState.sellOut.currencyCode = selectedCurrency.code
                    let buyInCurrency = state.allCurrencies.find((item) => {return item.code === state.buyIn.currencyCode})
                    if(buyInCurrency){
                        newState.buyIn.value = round(newState.sellOut.value / selectedCurrency.rate * buyInCurrency.rate, 2)
                    }
                }else{
                    newState.buyIn.currencyCode = selectedCurrency.code
                    let sellOutCurrency = state.allCurrencies.find((item) => {return item.code === state.sellOut.currencyCode})
                    if(sellOutCurrency){
                        newState.sellOut.value = round(newState.buyIn.value / selectedCurrency.rate * sellOutCurrency.rate, 2)
                    }
                }
            }
            
            return Object.assign({}, state, newState)
        }

        // Send the API call to get updated exchange rate
        case ActionTypes.FETCH_EXCHANGE_RATE:{
            let newState = state

            fetch('https://openexchangerates.org/api/latest.json?app_id='+OPEN_EXCHANGE_RATES_APP_ID)
                .then(res => res.json())
                .then(res => {
                    if(res.error) {
                        throw(res.error);
                    }
                    // console.log(res)
                    let rates = res.rates
                    newState.allCurrencies.map((item) => {
                        let newItem = item
                        let currencyCode = newItem.code
                        
                        if(rates[currencyCode]){
                            newItem.rate = rates[currencyCode]
                        }
                        return newItem
                    })
                })
                .catch(error => {
                    console.log(error)
                })

            return Object.assign({}, state, newState)
        }

        default:
            return state
    }
}

// round the number with decimals
function round(value: number, exp: number) {
    if (typeof exp === 'undefined' || +exp === 0)
      return Math.round(value);
  
    value = +value;
    exp = +exp;
  
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0))
      return NaN;
  
    // Shift
    var valueString = value.toString().split('e');
    value = Math.round(+(valueString[0] + 'e' + (valueString[1] ? (+valueString[1] + exp) : exp)));
  
    // Shift back
    valueString = value.toString().split('e');
    return +(valueString[0] + 'e' + (valueString[1] ? (+valueString[1] - exp) : -exp));
}