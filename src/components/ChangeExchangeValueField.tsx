import React from 'react'
import Money from '../models/money'

interface ChangeExchangeValueFieldProps {
    exchange: Money,
    onInputChange: (value: number, isSellingOut: boolean) => void,
    isSellingOut: boolean
}

interface ChangeExchangeValueFieldState {}

class ChangeExchangeValueField extends React.Component<ChangeExchangeValueFieldProps, ChangeExchangeValueFieldState>{

    handleChange = (e: any) => {
        this.props.onInputChange(e.target.value, this.props.isSellingOut)
    }

    render() {
        let {isSellingOut, exchange} = this.props
        let inputValue = exchange.value

        return (<div> 
            {inputValue > 0 && <span>{isSellingOut ? "-" : "+"}</span>}
            <input type="number" value={inputValue} onChange={(e: any) => this.handleChange(e)} />
        </div>)
    }
    
}

export default ChangeExchangeValueField