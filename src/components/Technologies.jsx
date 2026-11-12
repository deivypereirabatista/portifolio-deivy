import "./Technologies.css"

function Technologies() {
    return(
        <section id="tecnologias" className="technologies">
            <h2 className="titles">Tecnologias</h2>

            <div className="technology-list">
                <div className="cards-tech">
                    <img src="/images/icons/icon-typescript.png" alt="" width="48" height="48" loading="lazy" />
                    TypeScript
                </div>
                <div className="cards-tech">
                    <img src="/images/icons/icon-javascript.png" alt="" width="48" height="48" loading="lazy" />
                    JavaScript
                </div>
                <div className="cards-tech">
                    <img src="/images/icons/icon-react.png" alt="" width="40" height="40" loading="lazy" />
                    React
                </div>
                <div className="cards-tech">
                    <img src="/images/icons/icon-html.png" alt="" width="48" height="48" loading="lazy" />
                    HTML
                </div>
                <div className="cards-tech">
                    <img src="/images/icons/icon-css.png" alt="" width="48" height="48" loading="lazy" />
                    CSS
                </div>
                <div className="cards-tech">
                    <img src="/images/icons/icon-node.png" alt="" width="48" height="48" loading="lazy" />
                    Node
                </div>
                <div className="cards-tech">
                    <img src="/images/icons/icon-supabase.png" alt="" width="48" height="48" loading="lazy" />
                    Supabase
                </div>
                <div className="cards-tech">
                    <img src="/images/icons/icon-git.png" alt="" width="48" height="48" loading="lazy" />
                    Git
                </div>

                <div className="cards-tech">
                    <img src="/images/icons/icon-github.png" alt="" width="48" height="48" loading="lazy" />
                    GitHub
                </div>
            </div>
        </section>
    )
}

export default Technologies
