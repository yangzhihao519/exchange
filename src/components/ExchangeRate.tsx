import React from 'react'
import Currency from '../models/currency'

interface ExchangeRateProps {
    sellOutCurrency: Currency
    buyInCurrency: Currency
}

class ExchangeRate extends React.Component<ExchangeRateProps>{

    render() {
        let {sellOutCurrency, buyInCurrency} = this.props

        return (<div className='exchange-rate'>
            {sellOutCurrency && buyInCurrency &&
                <div>1{sellOutCurrency.symbol} = {(1/sellOutCurrency.rate*buyInCurrency.rate).toFixed(4)}{buyInCurrency.symbol}</div>
            }
        </div>)
    }
}

export default ExchangeRate