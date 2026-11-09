import "./Projects.css"

function Projects() {
    return(
        <section id="projetos" className="projects">
            <h2 className="titles">Meus projetos</h2>

            <div className="project-list">
                <article className="project-card">
                    <div className="img-project">
                        <img src="/images/idb-central.png" alt="Página inicial do site da IDB Central Trindade" width="1125" height="673" loading="lazy" decoding="async" />
                    </div>

                    <div className="text-project">
                        <h3 className="title-project">Site IDB CENTRAL</h3>
                        <div className="description-project">
                            <p className="generals-texts">
                            Site desenvolvido para a Igreja de Deus no Brasil,
                            com o objetivo de apresentar informações, conteúdos e recursos da igreja aos seus membros e visitantes.
                        </p>

                        </div>
                        <div className="stacks-used">
                            <img src="/images/icons/icon-javascript.png" alt="JavaScript" title="JavaScript" width="48" height="48" loading="lazy" />
                            <img src="/images/icons/icon-html.png" alt="HTML" title="HTML" width="48" height="48" loading="lazy" />
                            <img src="/images/icons/icon-css.png" alt="CSS" title="CSS" width="48" height="48" loading="lazy" />

                            <p className="generals-texts">
                                Hospedado na Netlify
                            </p>
                        </div>

                        <a href="https://idbcentraltrindade.com.br/" target="_blank" rel="noopener noreferrer">Ver Projeto</a>
                        </div>
                </article>

                <article className="project-card">
                    <div className="img-project">
                        <img src="/images/site-deivy.png" alt="Página inicial do site pessoal de Deivy Batista" width="1234" height="853" loading="lazy" decoding="async" />
                    </div>

                    <div className="text-project">
                        <h3 className="title-project">Site Pessoal Deivy Batista</h3>
                        <div className="description-project">
                            <p className="generals-texts">
                            Site desenvolvido para apresentar serviços de desenvolvimento web, destacando soluções personalizadas, landing pages e sistemas para empresas e profissionais.
                        </p>
                        </div>

                        <div className="stacks-used">
                            <img src="/images/icons/icon-javascript.png" alt="JavaScript" title="JavaScript" width="48" height="48" loading="lazy" />
                            <img src="/images/icons/icon-html.png" alt="HTML" title="HTML" width="48" height="48" loading="lazy" />
                            <img src="/images/icons/icon-css.png" alt="CSS" title="CSS" width="48" height="48" loading="lazy" />

                            <p className="generals-texts">
                                Hospedado na Netlify
                            </p>
                        </div>

                        <a href="https://deivybatista.netlify.app/" target="_blank" rel="noopener noreferrer">Ver Projeto</a>
                        </div>
                </article>
            </div>
        </section>
    )
}

export default Projects
