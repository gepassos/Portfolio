import React from 'react'
import '../layoutComponentsCSS/main-content.css'

const MainContent = ({ className }) => {
    return (
        <main className={className}>

            <div className='flex-column'>
                <h1>Ola, bem vindo ao site do Gustavo Passos</h1>
                <div className='text-content'>Desenvolvedor Web FullStack</div>
            </div>

            <img className="foto" src="./Pikachu.png" alt="Minha imagem" />
        </main>
    )
}

export default MainContent;