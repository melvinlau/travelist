import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { shallow } from 'enzyme';
import App from './App';

it('Sample passing test', () => {
  expect(true).toEqual(true);
});

describe('<App />', ()=> {

  it('renders a single <Router /> component', () => {
    const app = shallow(<App />);
    expect(app.find(Router).length).toBe(1);
  });

});
