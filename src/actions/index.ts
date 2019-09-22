export enum ActionTypes{
    CHANGE_EXCHANGE_VALUE = 'CHANGE_EXCHANGE_VALUE ',
    CONFIRM_EXCHANGE = 'CONFIRM_EXCHANGE',
    SWITCH_EXCHANGE = 'SWITCH_EXCHANGE',
    SELECT_CURRENCY = 'SELECT_CURRENCY',
    FETCH_EXCHANGE_RATE = 'FETCH_EXCHANGE_RATE'
}

export interface InputValueChange {
    type: ActionTypes.CHANGE_EXCHANGE_VALUE, 
    payload: { 
        value: number,
        isSellingOut: boolean
    }
}

export interface ConfirmExchange {
    type: ActionTypes.CONFIRM_EXCHANGE,
    payload: {}
}

export interface SwitchExchange {
    type: ActionTypes.SWITCH_EXCHANGE,
    payload: {}
}

export interface SelectCurrency {
    type: ActionTypes.SELECT_CURRENCY, 
    payload: { 
        selectedCurrencyCode: string,
        isSellingOut: boolean
    }
}

export interface FetchExchangeRate {
    type: ActionTypes.FETCH_EXCHANGE_RATE,
    payload: {}
}

export function changeExchangeValue(value: number, isSellingOut: boolean): InputValueChange{
    return{
        type: ActionTypes.CHANGE_EXCHANGE_VALUE,
        payload: { 
            value: value,
            isSellingOut: isSellingOut
        }
    }
}

export function confirmExchange(){
    return{
        type: ActionTypes.CONFIRM_EXCHANGE,
        payload: {}
    }
}

export function switchExchange(){
    return{
        type: ActionTypes.SWITCH_EXCHANGE,
        payload: {}
    }
}

export function selectCurrency(selectedCurrencyCode: string, isSellingOut: boolean){
    return{
        type: ActionTypes.SELECT_CURRENCY,
        payload: {
            selectedCurrencyCode: selectedCurrencyCode,
            isSellingOut: isSellingOut
        }
    }
}

export function fetchExchangeRate(){
    return{
        type: ActionTypes.FETCH_EXCHANGE_RATE,
        payload: {}
    }
}

export type Action = InputValueChange | ConfirmExchange | SwitchExchange | SelectCurrency | FetchExchangeRate