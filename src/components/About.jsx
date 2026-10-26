import "./About.css"

function About(){
    return(
        <section id="sobre" className="about">
            <div className="image-about">
                <img src="./images/minha-imagem-no-computador.png" alt="Imagem no computador" />
            </div>

            <div className="description-about">
                <h2 className="titles">Sobre mim</h2>

                <p className="generals-texts">
                    Sou desenvolvedor web apaixonado por transformar ideias em sistemas funcionais, organizados e fáceis de usar. Trabalho com interfaces, integração entre front-end e back-end, bancos de dados e publicação de aplicações, sempre buscando soluções que resolvam problemas reais.
                </p>

                <p className="generals-texts">
                    Atualmente, cursando pós-graduação em Análise e Desenvolvimento de Sistemas, aprofundo meus conhecimentos em arquitetura de software, modelagem, banco de dados e boas práticas de engenharia. Aplico o que aprendo nos meus projetos, o que me permite evoluir continuamente e entregar códigos cada vez mais sólidos e sustentáveis.
                </p>
            </div>
            
        </section>
    )
}

export default About