import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import SwitchButton from '../SwitchButton';

const mockFunction = jest.fn();

describe('SwitchButton', () => {
  it('renders without crashing given the required props', () => {
    const props = {
        onSwitchExchange: mockFunction
    }
    const wrapper = shallow(<SwitchButton {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})