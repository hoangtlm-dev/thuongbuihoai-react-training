import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import {
  QueryClient,
  QueryClientProvider
} from 'react-query';
import {
  BrowserRouter,
  Router
} from 'react-router-dom';

export const renderRouterTest = (component: JSX.Element) => {
  const history = createMemoryHistory();
  return render(
    <Router location={history.location} navigator={history}>
      {component}
    </Router>
  );
};

export const renderWithRouterAndQuery = (children: JSX.Element) => {
  const queryClient = new QueryClient();

  return render(
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </BrowserRouter>
  );
};
