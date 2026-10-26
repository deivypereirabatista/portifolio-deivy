import { useState } from "react"

import "./Navbar.css"

function Navbar() {

    const [menuAberto, setMenuAberto] = useState(false)

    function fecharMenu() {
        setMenuAberto(false)
    }

    return(
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-logo">
                    <img src="./images/minha-logo-otimizada.png" alt="Logo DB" />
                    <a href="#inicio">Deivy Batista</a>
                </div>
            
            
                {/* Botão hamburguer para mobile */}
                <button className="menu-button" onClick={() => setMenuAberto(!menuAberto)}>
                    {menuAberto ? '✕' : '☰'}
                </button>

                {/* Menu dos Links */}
                <div className={`nav-links ${menuAberto ? 'aberto' : ''}`}>
                    <a href="#inicio" className="active" onClick={fecharMenu}>Inicio</a>
                    <a href="#sobre" onClick={fecharMenu}>Sobre</a>
                    <a href="#tecnologia" onClick={fecharMenu}>Tecnologia</a>
                    <a href="#projetos" onClick={fecharMenu}>Projetos</a>
                    <a href="#contato" className="nav-btn-contato" onClick={fecharMenu}>Contato</a>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
