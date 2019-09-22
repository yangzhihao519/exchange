import React from 'react';
import App from '../App';
import { mount, shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import SwitchButton from '../SwitchButton';
import ExchangeButton from '../ExchangeButton';

const mockFunction = jest.fn();

describe('App', () => {
  it('renders without crashing given the required props', () => {
    const props = {
      initBalances: [],
      exchange: {},
      allCurrencies: [],
      onInputChange: mockFunction,
      onClickExchange: mockFunction,
      onSwitchExchange: mockFunction,
      onSelectCurrency: mockFunction,
      fetchExchangeRate: mockFunction
    }
    const wrapper = shallow(<App {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('should call mockFunction on Switch button click', () => {
    const component = mount(
      <SwitchButton onSwitchExchange={mockFunction} />
    );
    component.find('.switch-button').simulate('click');
    expect(mockFunction).toHaveBeenCalled();
    
    component.unmount();
  });
  
  it('should call mockFunction on Exchange button click', () => {
    const component = mount(
      <ExchangeButton onClickExchange={mockFunction} disabled={false} />
    );
    component.find('.exchange-button').simulate('click');
    expect(mockFunction).toHaveBeenCalled();
    
    component.unmount();
  });
})