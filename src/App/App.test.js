import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

// yarn add enzyme --dev, yarn add react-test-renderer --dev

it('resetProgress() resets quiz state', () => {
  let component = shallow(<App />);
  component.instance().setState = jest.fn();

  component.instance().state = {
    progress: 2,
    selected: 'Yower',
    score: 1
  };

  component.instance().resetProgress();

  expect(component.instance().setState).toHaveBeenCalledWith({
    progress: 0,
    selected: 'None yet!',
    score: 0
  })
});
