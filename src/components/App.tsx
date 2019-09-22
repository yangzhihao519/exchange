import React from 'react';
import '../css/styles.css';
import Area from './Area';
import Money from '../models/money'
import Currency from '../models/currency';
import ExchangeButton from '../components/ExchangeButton'
import SwitchButton from '../components/SwitchButton'
import ExchangeRate from '../components/ExchangeRate'

interface AppProps {
  initBalances: Money[]
  exchange: {
    sellOut: Money,
    buyIn: Money
  }
  allCurrencies: Currency[]
  onInputChange: (value: number, isSellingOut: boolean) => void
  onClickExchange: () => void
  onSwitchExchange: () => void
  onSelectCurrency: (selectedCurrencyCode: string, isSellingOut: boolean) => void
  fetchExchangeRate: () => void
}

interface AppState {}

class App extends React.Component<AppProps, AppState>{
  
  timer = 0

  componentDidMount() {
    this.props.fetchExchangeRate()
    // Send the API every 10 seconds to refresh the rates
    // The line below was commented out due to the limitation of API calls per month
    //this.timer = setInterval(() => this.props.fetchExchangeRate(), 10000);
  }

  componentWillUnmount() {
      clearInterval(this.timer);
      this.timer = 0;
  }

  render() {
    let { initBalances, exchange, onClickExchange, onSwitchExchange, allCurrencies} = this.props
    let sellOutExchange = exchange.sellOut
    let sellOutInitBalance = initBalances.find((item) => {return item.currencyCode === sellOutExchange.currencyCode})
    let buyInExchange = exchange.buyIn
    let buyInInitBalance = initBalances.find((item) => {return item.currencyCode === buyInExchange.currencyCode})
    let sellOutCurrency = allCurrencies.find((item) => {return item.code === sellOutExchange.currencyCode})
    let buyInCurrency = allCurrencies.find((item) => {return item.code === buyInExchange.currencyCode})
    let disableExchangeButton = sellOutInitBalance ? sellOutInitBalance.value < sellOutExchange.value || sellOutExchange.value === 0 || sellOutExchange.currencyCode === buyInExchange.currencyCode: true

    return(
      <div className='app'>
        <div className='app__title'>Exchange</div>
        <div className='area-container'>
            {sellOutInitBalance ? <Area allCurrencies={allCurrencies}
                                        initBalance={sellOutInitBalance} 
                                        exchange={sellOutExchange} 
                                        onInputChange={this.props.onInputChange} 
                                        onSelectCurrency={this.props.onSelectCurrency}
                                        isSellingOut={true}/> 
                                :  <div>Sell Out Balance is not available.</div>}
            <div className='area__middle'>
              <SwitchButton onSwitchExchange={onSwitchExchange}/>
              {sellOutCurrency && buyInCurrency && <ExchangeRate sellOutCurrency={sellOutCurrency} buyInCurrency={buyInCurrency}/>}
            </div>
            {buyInInitBalance ? <Area allCurrencies={allCurrencies}
                                      initBalance={buyInInitBalance} 
                                      exchange={buyInExchange} 
                                      onInputChange={this.props.onInputChange} 
                                      onSelectCurrency={this.props.onSelectCurrency}
                                      isSellingOut={false}/> 
                              : <div>Buy In Balance is not available.</div>}
          </div>
          <ExchangeButton onClickExchange={onClickExchange} disabled={disableExchangeButton}/>
      </div>
    )
  }
}

export default App;
