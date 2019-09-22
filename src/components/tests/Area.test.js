import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Area from '../Area';

const mockFunction = jest.fn();

describe('Area', () => {
  it('renders without crashing given the required props', () => {
    const props = {
        allCurrencies: [],
        initBalance: {},
        exchange: {},
        isSellingOut: false,
        onInputChange: mockFunction,
        onSelectCurrency: mockFunction
    }
    const wrapper = shallow(<Area {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})