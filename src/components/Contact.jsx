import { useState } from "react"

import "./Contact.css"

function Contact() {

    const [nome, setNome] = useState("")

    function handleSubmit(event) {
        event.preventDefault()

        console.log("Formulário enviado")
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle-more preview-icon"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/><path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/></svg>
                        </div>
                        <div className="text-card-my-contact">
                            <p className="clean-text">WhatsApp</p>
                            <p className="generals-texts">(62)996883636</p>
                        </div>
                    </div>
                    <div className="card-my-contact">
                        <div className="icon-card-my-contact">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link preview-icon"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                        </div>
                        <div className="text-card-my-contact">
                            <p className="clean-text">Linkedin</p>
                            <p className="generals-texts">linkedin.com/in/deivy-batista</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="second-contact">
                <form onSubmit={handleSubmit}>
                    <h2>Envie uma mensagem</h2>
                    <div className="primary-info">
                        <div className="field">
                            <label htmlFor="nome">Nome</label>
                            <input 
                                id="nome"
                                type="text" 
                                placeholder="Seu nome"
                                value={nome} 
                                onChange={(event) => setNome(event.target.value)}
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="email">E-mail</label>
                            <input 
                                id="email"
                                type="email" 
                                placeholder="email@email.com"
                            />
                        </div>
                    </div>
                    
                    <div className="field">
                        <label htmlFor="assunto">Assunto</label>
                        <input id="assunto" type="text" placeholder="Ex.: Quero um site para o meu negócio" />
                    </div>
                    <div className="field">
                        <label htmlFor="mensagem">Mensagem</label>
                        <textarea id="mensagem" placeholder="Conte um pouco sobre o que você precisa..."></textarea>
                    </div>

                    <button type="submit">Enviar mensagem</button>
                </form>
            </div>

            
        </section>
    )
}

export default Contact