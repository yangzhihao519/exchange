import React from 'react'

interface SwitchButtonProps {
    onSwitchExchange: () => void
}

class SwitchButton extends React.Component<SwitchButtonProps>{

    render() {
        return (<div className='switch-button' onClick={this.props.onSwitchExchange} />)
    }
}

export default SwitchButton