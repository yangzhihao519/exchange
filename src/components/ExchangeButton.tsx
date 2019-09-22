import React from 'react'

interface ExchangeButtonProps {
    onClickExchange: () => void,
    disabled: boolean
}

class ExchangeButton extends React.Component<ExchangeButtonProps>{

    render() {
        let className = this.props.disabled? 'exchange-button primary-button disabled' : 'exchange-button primary-button'

        return (<div className={className} onClick={this.props.onClickExchange}> 
            Exchange
        </div>)
    }
    
}

export default ExchangeButton