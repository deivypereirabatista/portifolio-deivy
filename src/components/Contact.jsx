import { useState } from "react"

function Contact() {

    const [nome, setNome] = useState("")

    function handleSubmit(event) {
        event.preventDefault()

        console.log("Formulário enviado")
    }

    return(
        <section id="contato" className="contact">
            <h2>Entre em contato</h2>
            <p>Tem um projeto em mente? Entre em contato comigo.</p>

            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Seu nome"
                    value={nome} 
                    onChange={(event) => setNome(event.target.value)}
                />

                <input
                    type="text" 
                    placeholder="Seu e-mail" 
                />

                <textarea placeholder="Fale sobre seu projeto"></textarea>

                <button type="submit">Enviar mensagem</button>
            </form>
        </section>
    )
}

export default Contact