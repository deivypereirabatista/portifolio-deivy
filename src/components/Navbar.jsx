import { useEffect, useState } from "react"

import "./Navbar.css"

function Navbar() {

    const [menuAberto, setMenuAberto] = useState(false)

    function fecharMenu() {
        setMenuAberto(false)
    }

    useEffect(() => {
        if (!menuAberto) return

        function fecharComEsc(event) {
            if (event.key === "Escape") setMenuAberto(false)
        }

        document.addEventListener("keydown", fecharComEsc)
        return () => document.removeEventListener("keydown", fecharComEsc)
    }, [menuAberto])

    return(
        <nav className="navbar" aria-label="Navegação principal">
            <div className="nav-container">
                <div className="nav-logo">
                    <img src="/images/minha-logo-otimizada.png" alt="" width="32" height="32" />
                    <a href="#inicio">Deivy Batista</a>
                </div>

                <button
                    type="button"
                    className="menu-button"
                    aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={menuAberto}
                    aria-controls="menu-principal"
                    onClick={() => setMenuAberto(!menuAberto)}
                >
                    <span aria-hidden="true">{menuAberto ? '✕' : '☰'}</span>
                </button>

                <div id="menu-principal" className={`nav-links ${menuAberto ? 'aberto' : ''}`}>
                    <a href="#inicio" className="active" onClick={fecharMenu}>Início</a>
                    <a href="#sobre" onClick={fecharMenu}>Sobre</a>
                    <a href="#tecnologias" onClick={fecharMenu}>Tecnologia</a>
                    <a href="#projetos" onClick={fecharMenu}>Projetos</a>
                    <a href="#contato" className="nav-btn-contato" onClick={fecharMenu}>Contato</a>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
