import React from 'react';
import '../layoutComponentsCSS/header.css'
import { Link } from 'react-router-dom'

const Header = ({ className }) => {
    return (
        <header className={className}>
            <Link to='/' className='home'>Home</Link>
            <Link to='/Servicos' className='servicos'>Servicos</Link>
            <Link to='/portfolio' className='portfolio'>Portfólio</Link>
        </header>
    );
}
export { Header };