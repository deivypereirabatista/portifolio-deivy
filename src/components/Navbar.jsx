import { useState } from "react"

function Navbar() {

    const [menuAberto, setMenuAberto] = useState(false)
    return(
        <nav>
            <div className="nav-logo">
                <h2>Deivy Batista</h2>
            </div>
            
            <button className="menu-button" onClick={() => setMenuAberto(!menuAberto)}>
                ☰
            </button>

            <div className={`nav-links ${menuAberto ? 'aberto' : ''}`}>
                <a href="#inicio">Inicio</a>
                <a href="#sobre">Sobre</a>
                <a href="#tecnologia">Tecnologia</a>
                <a href="#projetos">Projetos</a>
                <a href="#contato">Contato</a>
            </div>
        </nav>

    )
}

export default Navbar