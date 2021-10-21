import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

function App() {
  return (
    <div className="flex w-screen h-screen" id="appdiv">
     <Sidebar/>
     <Main />
    </div>
  );
}

export default App;
