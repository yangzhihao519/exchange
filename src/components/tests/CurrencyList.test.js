import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import CurrencyList from '../CurrencyList';

const mockFunction = jest.fn();

describe('CurrencyList', () => {
  it('renders without crashing given the required props', () => {
    const props = {
        allCurrencies: [],
        onSelectCurrency: mockFunction,
        selectedCurrencyCode: '',
        isSellingOut: false
    }
    const wrapper = shallow(<CurrencyList {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})