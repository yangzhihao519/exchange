import React from 'react';
import Money from '../models/money'
import Currency from '../models/currency'
import ChangeExchangeValueField from '../components/ChangeExchangeValueField'
import CurrencyList from '../components/CurrencyList'

interface AreaProps {
    allCurrencies: Currency[],
    initBalance: Money,
    exchange: Money,
    isSellingOut: boolean
    onInputChange: (value: number, isSellingOut: boolean) => void
    onSelectCurrency: (selectedCurrencyCode: string, isSellingOut: boolean) => void
}

interface AreaState {}

class Area extends React.Component<AreaProps, AreaState>{
    render() {
        let { allCurrencies, initBalance,exchange, isSellingOut, onInputChange, onSelectCurrency } = this.props;
        let currentCurrency = allCurrencies.find((item) => {return item.code === exchange.currencyCode})

        return(
            <div className={isSellingOut? "area area--sellout" : "area area--buyin"}>
                <div className='area__pocket'>
                    <CurrencyList allCurrencies={allCurrencies} 
                                    onSelectCurrency={onSelectCurrency} 
                                    selectedCurrencyCode={exchange.currencyCode}
                                    isSellingOut={isSellingOut}/>
                    <div className="area__balance">Balance: {currentCurrency && currentCurrency.symbol}{initBalance.value}</div>
                </div>
                <div className='area__input'>
                    <ChangeExchangeValueField isSellingOut={isSellingOut} exchange={exchange} onInputChange={onInputChange}/>
                </div>
            </div>
        )
    }
}
  
export default Area;