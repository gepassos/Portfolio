import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';

import './app.css';
import Footer from './layoutComponents/Footer';
import { Header } from './layoutComponents/Header';
import MainContent from './layoutComponents/MainContent';
import Portfolio from './Content/Portfolio';
import Contato from './Content/Contato';

function App() {
  return (
    <HashRouter>
      <div className="container">
        <Header className="header" />
        <Routes>
          <Route path="/" element={<MainContent className="main-content" />} />
          <Route path="/portfolio" element={<Portfolio className="portfolio" />} />
          <Route path="/contato" element={<Contato className="sobre-component" />} />
        </Routes>

        <Footer className="footer" />
      </div>
    </HashRouter>
  );
}

export default App;