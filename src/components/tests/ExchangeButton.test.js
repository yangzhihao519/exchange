import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ExchangeButton from '../ExchangeButton';

const mockFunction = jest.fn();

describe('ExchangeButton', () => {
  it('renders without crashing given the required props', () => {
    const props = {
        onClickExchange: mockFunction,
        disabled: false
    }
    const wrapper = shallow(<ExchangeButton {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})