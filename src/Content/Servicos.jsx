import React from 'react'
import '../layoutComponentsCSS/servicos.css'

const Servicos = ({ className }) => {
    return (
        <div className={className}>
            <div className='sobre-componentt'>
                <h2 className='titulo-sobre'>Serviços </h2>
            </div>


            <div className='article-container'>
                <article className='sobre-content'>
                    <h3>Aumente o tráfego do seu Site </h3>
                    <p>Ter um site bem projetado e desenvolvido é importante, mas sem uma estratégia de SEO eficaz, seu site pode não ser encontrado pelos seus clientes potenciais. O SEO ajuda a melhorar sua visibilidade online, garantindo que seu site apareça nos resultados de pesquisa relevantes para sua empresa. Ao implementar uma estratégia de SEO sólida, você pode aumentar o tráfego para o seu site, aumentar sua base de clientes e impulsionar o sucesso do seu negócio.</p>
                </article>
                <article className='sobre-content'>
                    <h3>Melhore a experiencia para o usuário </h3>
                    <p>A experiência do usuário (UX) é um fator crítico para o sucesso do seu site. Um bom UX garante que os visitantes possam encontrar o que estão procurando de maneira fácil e eficiente, o que pode aumentar o tempo de permanência no site e reduzir as taxas de rejeição. Ao melhorar a UX, você pode melhorar a satisfação do cliente, aumentar as conversões e impulsionar o sucesso do seu site.</p>
                </article>
                <article className='sobre-content'>
                    <h3>A importância da segurança do site</h3>
                    <p>A segurança do site é crucial para proteger seus dados e informações confidenciais, bem como para garantir a confiança dos visitantes em seu site. Ao implementar medidas de segurança sólidas, como criptografia de dados, firewalls e autenticação de usuário, você pode proteger seu site contra ameaças de hackers e outras vulnerabilidades de segurança. Isso pode ajudar a manter a reputação e a credibilidade do seu site e proteger seus dados e informações de clientes.</p>
                </article>
                <article className='sobre-content'>
                    <h3>
                        Tenha o seu site
                    </h3>
                    <p>

                        Ter um site é fundamental para empresas e indivíduos que buscam aumentar sua presença online e se conectar com um público maior. Em cinco linhas, a importância de ter um site inclui:

                    </p>
                    <p>
                        Presença Online: Um site permite que você esteja disponível online 24 horas por dia, 7 dias por semana, tornando sua presença digital permanente.
                    </p>

                    <p>   Credibilidade: Um site profissional e bem construído ajuda a aumentar a credibilidade da sua marca ou negócio aos olhos dos seus clientes e prospects.</p>
                    <p>  Marketing Digital: Um site é uma ferramenta essencial para o marketing digital, permitindo que você utilize técnicas de SEO e mídia social para atrair mais tráfego e gerar leads.</p>

                </article>

            </div>
        </div >


    )
}

export default Servicos


