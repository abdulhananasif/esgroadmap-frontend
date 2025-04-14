import './App.css';
import Login from './pages/login';

function App() {
  return (
    <div>
      <h1 className="text-2xl text-yellow-300 font-bold">ESG-RoadMap</h1>
      <img
        src="/icons/circle-user.svg"
        alt="User Icon"
        width={20}
        height={20}
      />
      <Login />
    </div>
  );
}

export default App;
