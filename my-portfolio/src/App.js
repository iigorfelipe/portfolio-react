import './App.css';
import Header from './components/header';
import Main from './components/main';
import Info from './components/info';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Main />
        <Info />
      </div>
      </BrowserRouter>
  );
}

export default App;
