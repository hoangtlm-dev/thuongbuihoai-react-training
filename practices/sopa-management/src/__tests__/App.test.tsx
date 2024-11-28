import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import '@testing-library/jest-dom';

// Components
import App from '../App';

describe('App component', () => {
  test('rendering a view product list component that uses useLocation', () => {
    const history = createMemoryHistory();
    const route = '/';
    history.push(route);
    render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    );
    expect(screen.getByTestId('loading-page')).toBeInTheDocument();
  });

  test('rendering a product detail component that uses useLocation', () => {
    const history = createMemoryHistory();
    const route = '/products/:id';
    history.push(route);
    render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    );
    expect(screen.getByTestId('loading-page')).toBeInTheDocument();
  });

  test('rendering a login page component that uses useLocation', () => {
    const history = createMemoryHistory();
    const route = '/login';
    history.push(route);
    render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    );
    expect(screen.getByTestId('loading-page')).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const history = createMemoryHistory();
    const { asFragment } = render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
