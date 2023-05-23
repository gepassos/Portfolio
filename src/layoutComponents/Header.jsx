import React from 'react';
import '../layoutComponentsCSS/header.css'
import { Link } from 'react-router-dom'

const Header = ({ className }) => {
    return (
        <header className={className}>
            <Link to='/' className='home'>Home</Link>
            <Link to='/portfolio' className='portfolio-header'>Portfólio</Link>
            <Link to='/Contato' className='servicos'>Contato</Link>

        </header>
    );
}
export { Header };