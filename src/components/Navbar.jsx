import { useState } from "react"

function Navbar() {

    const [menuAberto, setMenuAberto] = useState(false)

    function fecharMenu() {
        setMenuAberto(false)
    }

    return(
        <nav>
            <div className="nav-logo">
                <h2>Deivy Batista</h2>
            </div>
            
            <button className="menu-button" onClick={() => setMenuAberto(!menuAberto)}>
                {menuAberto ? '✕' : '☰'}
            </button>

            <div className={`nav-links ${menuAberto ? 'aberto' : ''}`}>
                <a href="#inicio" onClick={fecharMenu}>Inicio</a>
                <a href="#sobre" onClick={fecharMenu}>Sobre</a>
                <a href="#tecnologia" onClick={fecharMenu}>Tecnologia</a>
                <a href="#projetos" onClick={fecharMenu}>Projetos</a>
                <a href="#contato" onClick={fecharMenu}>Contato</a>
            </div>
        </nav>

    )
}

export default Navbar