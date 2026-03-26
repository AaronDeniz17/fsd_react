import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './app/store';
import { UIProvider } from './context/UIContext';

test('renders brand and shop heading', () => {
  render(
    <Provider store={store}>
      <UIProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UIProvider>
    </Provider>
  );

  expect(screen.getByText(/novacart/i)).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Shop' })).toBeInTheDocument();
});
