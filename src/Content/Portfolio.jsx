import React from 'react'
import '../layoutComponentsCSS/portfolio.css'
import '../tags.css'
const Portfolio = (className) => {
    return (
        <div className={className}>
            <div className='sobre-componentt'>
                <h2 className='titulo-portfolio'>Meus projetos</h2>
            </div>

            <div className='article-container'>
                <article className=''>

                    <p>Em desenvolvimento...</p>

                    <iframe width="500" height="500" src="https://www.youtube.com/embed/MwTSpZZWL-s" title="Ursos Dançando" frameborder="0" allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </article>
            </div>

        </div>
    )
}

export default Portfolio