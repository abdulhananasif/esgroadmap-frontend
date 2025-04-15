import {useRoutes} from 'react-router-dom';
import {routesConfig} from './routes';

function AppRoutes() {
  const element = useRoutes(routesConfig);
  return element;
}
function App() {
  return (
    <div>
      <AppRoutes />
    </div>
  );
}

export default App;
