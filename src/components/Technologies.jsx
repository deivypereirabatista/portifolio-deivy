import "./Technologies.css"

function Technologies() {
    return(
        <section id="tecnologias" className="technologies">
            <h2 className="titles">Tecnologias</h2>

            <div className="technology-list">
                <div className="cards-tech">
                    <img src="./images/icons/icon-javascript.png" alt="Icone JS" />
                    JavaScript
                </div>
                <div className="cards-tech">
                    <img src="./images/icons/icon-react.png" alt="Icone JS" />
                    React
                </div>
                <div className="cards-tech">
                    <img src="./images/icons/icon-html.png" alt="Icone JS" />
                    HTML
                </div>
                <div className="cards-tech">
                    <img src="./images/icons/icon-css.png" alt="Icone JS" />
                    CSS
                </div>
                <div className="cards-tech">
                    <img src="./images/icons/icon-node.png" alt="Icone JS" />
                    Node
                </div>
                <div className="cards-tech">
                    <img src="./images/icons/icon-git.png" alt="Icone JS" />
                    Git
                </div>
                
                <div className="cards-tech">
                    <img src="./images/icons/icon-github.png" alt="Icone JS" />
                    GitHub
                </div>
            </div>
        </section>
    )
}

export default Technologies