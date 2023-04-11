import { render, screen } from '@testing-library/react';
import Home from './index';
import store from '../store/store';
import { Provider } from 'react-redux';

describe('Home page', () => {
  it('renders the CandidateInfo component', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const candidateInfoElement = screen.getByTestId('candidate-info');
    expect(candidateInfoElement).toBeInTheDocument();
  });

  it('renders the PublicLayout component', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const publicLayoutElement = screen.getByTestId('public-layout');
    expect(publicLayoutElement).toBeInTheDocument();
  });
});
