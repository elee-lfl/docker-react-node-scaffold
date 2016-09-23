import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import { Link } from 'react-router';

import Nav from '../js/components/nav';

describe('<Nav/>', () => {
  it('shows the login / signup buttons when logged out', () => {
    const wrapper = shallow(<Nav/>);
    wrapper.setState({ loggedIn: false });
    expect(wrapper.find('.login')).to.have.length(1);
    expect(wrapper.find('.signup')).to.have.length(1);
    expect(wrapper.find('.account')).to.have.length(0);
    expect(wrapper.find('.logout')).to.have.length(0);
  });

  it ('shows the account / logout buttons when logged in', () => {
    const wrapper = shallow(<Nav/>);
    wrapper.setState({ loggedIn: true });
    expect(wrapper.find('.login')).to.have.length(0);
    expect(wrapper.find('.signup')).to.have.length(0);
    expect(wrapper.find('.account')).to.have.length(1);
    expect(wrapper.find('.logout')).to.have.length(1);
  });
});
