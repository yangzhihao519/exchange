import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ExchangeRate from '../ExchangeRate';

describe('ExchangeRate', () => {
  it('renders without crashing given the required props', () => {
    const props = {
        sellOutCurrency: {},
        buyInCurrency: {}
    }
    const wrapper = shallow(<ExchangeRate {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('should render correctly with no props', () => {
    const component = shallow(<ExchangeRate/>);
    
    expect(component).toMatchSnapshot();
  });
})