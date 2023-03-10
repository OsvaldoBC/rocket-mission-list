import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import Profile from '../Profile';
import '@testing-library/jest-dom';
import store from '../../redux/configureStore';

describe('Testing page deployment', () => {
  test('Profile components matches snapshot', () => {
    const tree = render(
      <Provider store={store}>
        <Profile />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
