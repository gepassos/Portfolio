import React from 'react'
import '../layoutComponentsCSS/portfolio.css'
import '../tags.css'
const Portfolio = ({ className }) => {
    return (
        <div className={className}>

            <h2 className='titulo-portfolio'>Meus projetos</h2>
            <div className='container-imagem-desc'>
                <h2 className='allign-center'>ChatCrypto</h2>
                <img className='imagem-projeto' src="./chatcrypto.PNG" alt='imagem de um projeto de chat' >

                </img>
                <article className='descricao-projeto'>
                    <h4>Descrição do projeto:</h4>
                    <p>Esse projeto foi realizado enquanto eu trabalhava na PSG Tecnologia Aplicada,
                        em conjunto com 6 membros no time. Era composto por 2 analistas, 1 scrum master e 3 desenvolvedores.
                        Eu participei como desenvolvedor e junto tivemos um treinamento sobre Soft Skills, metodologia Scrum e Kanban,
                        utilizamos o Jira para gerenciar as atividades do time e para verificarmos o mockup do projeto e iniciarmos as atividades.
                    </p>
                    <p> Nesse projeto utilizamos as tecnologias: JavaScript, React/Redux, Socket IO, CSS/SASS, MongoDB e Node. Todos desenvolvedores
                        realizaram tarefas tanto de Front-End quanto de Back-End. O ChatCrypto tem como ideia ser um chat online e criptografar as mensagens enviadas,
                        e diversas funcionalidades que possuem no Discord e WhatsApp. Caso tenha interesse em conhecer
                        o aplicativo, peço que entre em contato para que eu possa mostrá-lo.
                    </p>
                </article>
            </div>
        </div>
    )
}

export default Portfolio