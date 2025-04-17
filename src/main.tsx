import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import {ThemeProvider} from './context/ThemeContext.tsx';
import {BrowserRouter} from 'react-router-dom';
import {PayPalScriptProvider} from '@paypal/react-paypal-js';

const initialOptions = {
  clientId:
    'AfSIwLjDZbTMzjbO4SC8gkavaGJ9OaEavjTYrZd1kW-y_ZDmltiRD6ER5eIGPK7TNn7UWGCVpue0Xh7d',
  currency: 'USD',
  intent: 'capture',
  components: 'buttons',
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <PayPalScriptProvider options={initialOptions}>
          <App />
        </PayPalScriptProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
