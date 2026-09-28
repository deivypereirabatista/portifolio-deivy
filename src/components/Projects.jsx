function Projects() {
    return(
        <section id="projetos" className="projects">
            <h2>Meus projetos</h2>

            <div className="project-list">
                <article className="project-card">

                    <img src="/images/idb-central.png" alt="Site IDB Central Trindade" />

                    <h3>Site IDB CENTRAL</h3>

                    <p>
                        Site desenvolvido para a Igreja de Deus no Brasil,
                        com o objetivo de apresentar informações, conteúdos e recursos da igreja aos seus membros e visitantes.
                    </p>

                    <p className="project-technologies">
                        JavaScript • HTML • CSS
                    </p>

                    <p className="project-hosting">
                        Hospedado na Netlify
                    </p>

                    <button>Ver Projeto</button>
                </article>
            </div>
        </section>
    )
}

export default Projects