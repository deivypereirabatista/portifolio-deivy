import { useRef, useState } from "react"
import { projects, stackIcons } from "../data/projects"
import "./Projects.css"

function Projects() {
    const listRef = useRef(null)
    const [current, setCurrent] = useState(0)

    function handleScroll() {
        const list = listRef.current
        const cards = Array.from(list.children)
        const nearest = cards.reduce((closest, card, index) => {
            const distance = Math.abs(card.offsetLeft - list.scrollLeft)
            return distance < closest.distance ? { index, distance } : closest
        }, { index: 0, distance: Infinity })

        setCurrent(nearest.index)
    }

    function goTo(index) {
        const list = listRef.current
        const card = list.children[index]
        if (!card) return

        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
        list.scrollTo({ left: card.offsetLeft, behavior: reduceMotion ? "auto" : "smooth" })
    }

    return(
        <section id="projetos" className="projects">
            <h2 className="titles">Meus projetos</h2>

            <div
                className="project-list"
                ref={listRef}
                onScroll={handleScroll}
                tabIndex={0}
                role="region"
                aria-label="Lista de projetos"
            >
                {projects.map((project, index) => (
                    <article
                        className="project-card"
                        key={project.url}
                        aria-label={`Projeto ${index + 1} de ${projects.length}`}
                    >
                        <div className="img-project">
                            <img
                                src={project.image.src}
                                alt={project.image.alt}
                                width={project.image.width}
                                height={project.image.height}
                                loading="lazy"
                                decoding="async"
                            />
                        </div>

                        <div className="text-project">
                            <h3 className="title-project">{project.title}</h3>
                            <div className="description-project">
                                <p className="generals-texts">{project.description}</p>
                            </div>

                            <div className="stacks-used">
                                {project.stacks.map((stack) => (
                                    <img
                                        key={stack}
                                        src={stackIcons[stack]}
                                        alt={stack}
                                        title={stack}
                                        width="48"
                                        height="48"
                                        loading="lazy"
                                    />
                                ))}

                                <p className="generals-texts">
                                    Hospedado na {project.hosting}
                                </p>
                            </div>

                            <a href={project.url} target="_blank" rel="noopener noreferrer">Ver Projeto</a>
                        </div>
                    </article>
                ))}
            </div>

            {projects.length > 1 && (
                <div className="carousel-controls">
                    <button
                        type="button"
                        className="carousel-arrow"
                        onClick={() => goTo(current - 1)}
                        disabled={current === 0}
                        aria-label="Projeto anterior"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>
                    </button>

                    <div className="carousel-dots">
                        {projects.map((project, index) => (
                            <button
                                type="button"
                                key={project.url}
                                className={`carousel-dot${index === current ? " active" : ""}`}
                                onClick={() => goTo(index)}
                                aria-label={`Ir para o projeto ${project.title}`}
                                aria-current={index === current}
                            />
                        ))}
                    </div>

                    <button
                        type="button"
                        className="carousel-arrow"
                        onClick={() => goTo(current + 1)}
                        disabled={current === projects.length - 1}
                        aria-label="Próximo projeto"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>
                    </button>
                </div>
            )}
        </section>
    )
}

export default Projects
