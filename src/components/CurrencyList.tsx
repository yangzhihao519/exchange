import React from 'react'
import Currency from '../models/currency'
import Select from 'react-select'

interface CurrencyListProps {
    allCurrencies: Currency[],
    onSelectCurrency: (selectedCurrencyCode: string, isSellingOut: boolean) => void,
    selectedCurrencyCode: string,
    isSellingOut: boolean
}

interface CurrencyListState {}

class CurrencyList extends React.Component<CurrencyListProps, CurrencyListState>{

    handleOnClick = (e: any) => {
        console.log(e)
        this.props.onSelectCurrency(e.value, this.props.isSellingOut)
    }

    render(){
        let {allCurrencies, selectedCurrencyCode} = this.props
        let allCurrenciesCodes = allCurrencies.map((item) => {return {value: item.code, label: item.code}})
        let selectedCode = {value: selectedCurrencyCode, label: selectedCurrencyCode}

        return <Select
            classNamePrefix='currency-list'
            value={selectedCode}
            onChange={(e:any) => this.handleOnClick(e)}
            options={allCurrenciesCodes}
        />
    }
}

export default CurrencyList