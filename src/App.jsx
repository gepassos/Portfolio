import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './app.css';
import Footer from './layoutComponents/Footer';
import { Header } from './layoutComponents/Header';
import SubContent from './layoutComponents/SubContent';
import MainContent from './layoutComponents/MainContent';
import Portfolio from './Content/Portfolio';
import Servicos from './Content/Servicos';

function App() {
  return (
    <HashRouter>
      <div className="container">
        <Header className="header" />
        <Routes>
          <Route path="/" element={<MainContent className="main-content" />} />
          <Route path="/portfolio" element={<Portfolio className="portfolio" />} />
          <Route path="/servicos" element={<Servicos className="sobre-component" />} />
        </Routes>

        <Footer className="footer" />
      </div>
    </HashRouter>
  );
}

export default App;