import "./Contact.css"

function Contact() {
    function handleSubmit(event) {
        event.preventDefault()

        const { nome, email, assunto, mensagem } = Object.fromEntries(
            new FormData(event.currentTarget)
        )

        const texto = `Olá, Deivy! Vim pelo seu portfólio.

*Nome:* ${nome}
*E-mail:* ${email}
*Qual Projeto:* ${assunto}

*Sobre o Projeto:*
${mensagem}`

        const url = `https://wa.me/5562996883636?text=${encodeURIComponent(texto)}`
        window.open(url, "_blank", "noopener,noreferrer")
    }

    return(
        <section id="contato" className="contact">
            <div className="primary-contact">
                <h2 className="titles">Contatos</h2>
                <h1 className="title-my-contact">Vamos conversar sobre o seu <span className="color-title-my-conatct">projeto?</span></h1>
                <p className="generals-texts">Conte o que você precisa: um site, uma landing page ou um sistema. Respondo o mais rápido possível.</p>
                <div className="my-contact">
                    <div className="card-my-contact">
                        <div className="icon-card-my-contact">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail preview-icon"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
                        </div>
                        <div className="text-card-my-contact">
                            <p className="clean-text">E-mail</p>
                            <p className="generals-texts">deivy.pessoal@gmail.com</p>
                        </div>
                    </div>
                    <div className="card-my-contact">
                        <div className="icon-card-my-contact">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-git-2 preview-icon"><path d="M18 19a5 5 0 0 1-5-5v8"/><path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"/><circle cx="13" cy="12" r="2"/><circle cx="20" cy="19" r="2"/></svg>
                        </div>
                        <div className="text-card-my-contact">
                            <p className="clean-text">GitHub</p>
                            <p className="generals-texts"><a href="https://github.com/deivypereirabatista" target="_blank" rel="noopener noreferrer">github.com/deivypereirabatista</a></p>
                        </div>
                    </div>
                    <div className="card-my-contact">
                        <div className="icon-card-my-contact">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link preview-icon"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                        </div>
                        <div className="text-card-my-contact">
                            <p className="clean-text">Linkedin</p>
                            <p className="generals-texts"><a href="https://www.linkedin.com/in/deivy-batista/" target="_blank" rel="noopener noreferrer">in/deivy-batista</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="second-contact">
                <form onSubmit={handleSubmit}>
                    <h2>Conte sobre o projeto</h2>
                    <div className="primary-info">
                        <div className="field">
                            <label htmlFor="nome">Nome</label>
                            <input 
                                id="nome"
                                name="nome"
                                type="text" 
                                placeholder="Seu nome"
                                required
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="email">E-mail</label>
                            <input 
                                id="email"
                                name="email"
                                type="email" 
                                placeholder="email@email.com"
                                required
                            />
                        </div>
                    </div>
                    
                    <div className="field">
                        <label htmlFor="assunto">Qual projeto</label>
                        <input id="assunto" name="assunto" type="text" placeholder="Ex.: Quero um site para o meu negócio" required/>
                    </div>
                    <div className="field">
                        <label htmlFor="mensagem">Sobre o projeto</label>
                        <textarea id="mensagem" name="mensagem" placeholder="Conte um pouco sobre o que você precisa..." required></textarea>
                    </div>

                    <button type="submit">Continuar no WhatsApp</button>
                </form>
            </div>

            
        </section>
    )
}

export default Contact