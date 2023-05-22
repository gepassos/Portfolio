import React from 'react'
import '../layoutComponentsCSS/main-content.css'

const MainContent = ({ className }) => {
    return (
        <main className={className}>

            <div className='flex-column'>
                <h1 class="fade-in">
                    <span>Hello,this is Gustavo Passos</span>
                </h1>
                <p className='text-content'>Desenvolvedor web especializado em Node.js e React, apaixonado por criar soluções inovadoras e eficientes. Com experiência sólida na construção de aplicações escaláveis e interativas, estou constantemente buscando aprimorar minhas habilidades e acompanhar as tendências mais recentes do desenvolvimento web.</p>
                <div className='container-subcontent'>
                    <img id='stacks' src='./logo192.png'></img>
                    <img id='stacks' src='./js.png'></img>
                    <img id='stacks' src='./html2.png'></img>
                    <img id='stacks' src="./css.png"></img>
                    <img id='stacks' src="./node.png"></img>
                </div>

            </div>

            <img className="foto" src="./Pikacu.png" alt="Minha imagem" />
        </main>
    )
}

export default MainContent;