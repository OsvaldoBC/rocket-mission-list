import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../Navbar';
import '@testing-library/jest-dom';

describe('Checking page deployment', () => {
  test('Navbar component matches snapshot', () => {
    const tree = renderer.create(<Router><Navbar /></Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});