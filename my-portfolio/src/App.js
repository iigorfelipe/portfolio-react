import './App.css';
import Main from './components/main';
import About from './components/about';
import Portfolio from './components/portfolio';
import AindaNaoSei from './components/nse';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Main } />
        <Route exact path="/about" component={ About } />
        <Route exact path="/portfolio" component={ Portfolio } />
        <Route exact path="/" component={ AindaNaoSei } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
