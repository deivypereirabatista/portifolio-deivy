function Contact() {
    return(
        <section id="contato" className="contact">
            <h2>Entre em contato</h2>
            <p>Tem um projeto em mente? Entre em contato comigo.</p>

            <form>
                <input type="text" placeholder="Seu nome" />
                <input type="text" placeholder="Seu e-mail" />

                <textarea placeholder="Fale sobre seu projeto"></textarea>

                <button type="submit">Enviar mensagem</button>
            </form>
        </section>
    )
}

export default Contact