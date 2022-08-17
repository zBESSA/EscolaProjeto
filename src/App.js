import './App.css';
import Logo from './componentes/templates/Logo';
import Menu from './componentes/templates/Menu';
import Footer from './componentes/templates/Footer';
import Rotas from './Rotas';
import {BrowserRouter} from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Logo />
        <Menu />
        <Rotas />
        <Footer />
      </div>
    </BrowserRouter>    
  )
}
