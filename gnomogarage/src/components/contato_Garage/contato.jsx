import { useState } from "react";
import "./contato.css";

export default function Contato() {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: "",
        assunto: "",
        mensagem: ""
    });

    const [open, setOpen] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function handleSelect(value) {
        setFormData(prev => ({ ...prev, assunto: value }));
        setOpen(false);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <section className="contato_container" id="contato">
            <form className="contato_form" onSubmit={handleSubmit}>
                <h2>CONTATOS</h2>

                <input
                    type="text"
                    name="nome"
                    placeholder="Nome:"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email:"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="tel"
                    name="telefone"
                    placeholder="Telefone:"
                    value={formData.telefone}
                    onChange={handleChange}
                />

                {/* DROPDOWN CUSTOM */}
                <div className="custom_select">
                    <div
                        className="select_display"
                        onClick={() => setOpen(!open)}
                    >
                        {formData.assunto || "Assunto:"}
                        <span className="arrow">{open ? "▲" : "▼"}</span>
                    </div>

                    {open && (
                        <ul className="select_options">
                            <li onClick={() => handleSelect("Customização")}>
                                Customização
                            </li>
                            <li onClick={() => handleSelect("Manutenção")}>
                                Manutenção
                            </li>
                            <li onClick={() => handleSelect("Orçamento")}>
                                Orçamento
                            </li>
                            <li onClick={() => handleSelect("Dúvida")}>
                                Dúvida
                            </li>
                        </ul>
                    )}
                </div>

                <textarea
                    name="mensagem"
                    placeholder="Mensagem:"
                    rows={4}
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                />

                <button type="submit" className="button_Env">
                    Enviar
                </button>
            </form>

            <div className="contato_info">
                <p>
                    Entre em contato através dos canais abaixo <br />
                    ou do formulário ao lado.
                </p>

                <p>Email: gnomogarage@gmail.com</p>
                <p>Whatsapp: +55 (48) 99930-0782</p>

                <div className="contato_redes">
                    <span>📷</span>
                    <span>📘</span>
                    <span>💬</span>
                </div>
            </div>
        </section>
    );
}
