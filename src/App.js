import Main from './components/main';
import About from './components/about';
import Contact from './components/contact';
import Portfolio from './components/portfolio';
import NotFound from './components/notFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './css/App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Main } />
        <Route exact path="/about" component={ About } />
        <Route exact path="/contact" component={ Contact } />
        <Route exact path="/portfolio" component={ Portfolio } />
        <Route exact path="*" component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}
