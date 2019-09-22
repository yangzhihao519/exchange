import { connect } from 'react-redux'
import { State } from '../reducers'
import { changeExchangeValue, confirmExchange, switchExchange, selectCurrency, fetchExchangeRate } from '../actions'
import { getInitBalances, getSellOutExchange, getBuyInExchange, getAllCurrencies } from '../selectors';
import App from '../components/App'

const mapStateToProps = (state: State) => ({
    initBalances: getInitBalances(state),
    exchange: {
      sellOut: getSellOutExchange(state),
      buyIn: getBuyInExchange(state)
    },
    allCurrencies: getAllCurrencies(state)
  })

const mapDispatchToProps = {
  onInputChange: changeExchangeValue,
  onClickExchange: confirmExchange,
  onSwitchExchange: switchExchange,
  onSelectCurrency: selectCurrency,
  fetchExchangeRate: fetchExchangeRate
}

export default connect(mapStateToProps, mapDispatchToProps)(App)