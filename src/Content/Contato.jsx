import React from 'react'
import '../layoutComponentsCSS/contato.css'

const Contato = ({ className }) => {
    return (
        <div className={className}>
            <div className='sobre-componentt'>
                <h2 className='titulo-sobre'>Contato</h2>
            </div>



            <article className='sobre-content'>
                <h3>Nome: </h3>
                <p>Gustavo Escudero Passos</p>
                <br></br>
                <h3>E-mail: </h3>
                <p>gustavo.escuderopassos@gmail.com</p>
                <br></br>

                <div className='flex-column-start'>
                    <h3> Redes Sociais: </h3>
                    <div className='flex-row-spacebet'>
                        <a href="https://www.linkedin.com/in/guescudero/">
                            <img src="./LinkedIn.png" alt="LinkedIn" width="32" height="32" />
                        </a>
                        <br></br>
                        <a href="https://github.com/gepassos">
                            <img src="./GitHub.png" width="32" height="32" alt="GitHub Profile Image" />
                        </a>
                    </div>
                </div>
            </article>

        </div >


    )
}

export default Contato


