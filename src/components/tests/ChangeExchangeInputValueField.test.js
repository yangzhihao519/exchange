import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ChangeExchangeValueField from '../ChangeExchangeValueField';

const mockFunction = jest.fn();

describe('ChangeExchangeValueField', () => {
  it('renders without crashing given the required props', () => {
    const props = {
        exchange: {},
        onInputChange: mockFunction,
        isSellingOut: false
    }
    const wrapper = shallow(<ChangeExchangeValueField {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})