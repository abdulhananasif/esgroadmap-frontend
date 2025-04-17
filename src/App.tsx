import {PayPalButtons} from '@paypal/react-paypal-js';
import {AppRoutes} from './AppRoutes';

const App = () => {
  return (
    <div className="App">
      <h2>PayPal Test</h2>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
              {
                amount: {
                  value: '10.00',
                  currency_code: 'USD',
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          const details = await actions.order?.capture();
          console.log('Payment Approved!', details);
        }}
      />
      <AppRoutes />
    </div>
  );
};

export default App;
