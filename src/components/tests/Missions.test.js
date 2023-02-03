import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import Missions from '../Missions';
import '@testing-library/jest-dom';
import store from '../../redux/configureStore';

describe('Testing page deployment', () => {
  test('Missions components matches snapshot', () => {
    const tree = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
