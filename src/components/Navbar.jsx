function Navbar() {
    return(
        <nav>
            <div className="nav-logo">
                <h2>Deivy Batista</h2>
            </div>
            
            <button className="menu-button">
                ☰
            </button>

            <div className="nav-links">
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