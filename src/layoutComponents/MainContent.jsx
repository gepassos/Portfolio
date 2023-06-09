import React from 'react'
import '../layoutComponentsCSS/main-content.css'

const MainContent = ({ className }) => {
    return (
        <main className={className}>

            <div className='flex-column'>
                <h1 class="fade-in titulo-main">
                    <span>Hello, i'm </span>
                    <span>Gustavo Passos</span>
                </h1>
                <p className='text-content'> Sou formado em Ciência da Computação e desenvolvedor web especializado em JS, Node e React, apaixonado
                    por criar soluções inovadoras e eficientes. Com experiência na construção de aplicações escaláveis e interativas, estou constantemente buscando
                    aprimorar minhas habilidades e acompanhar as tendências mais recentes do desenvolvimento web.</p>
                <div className='container-subcontent'>
                    <img id='stacks' src='./logo192.png'></img>
                    <img id='stacks' src='./js.png'></img>
                    <img id='stacks' src='./html2.png'></img>
                    <img id='stacks' src="./css.png"></img>
                    <img id='stacks' src="./node.png"></img>
                </div>

            </div>

            <img className="foto" src="./foto2.png" alt="Minha imagem" />
        </main>
    )
}

export default MainContent;