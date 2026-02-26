import { useState } from "react";
import logo_Garage from "../../assets/logo_Garage(sem fundo).png";
import "./styles_navBar.css";
export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className="header_navBar">
            <nav className="nav_Bar">
                <a href="https://www.instagram.com/gnomogarage/" target="_blank" rel="noopener noreferrer">
                    <img src={logo_Garage} className="logoGarage" alt="logo Garage" />
                </a>
                <div className={`buttons_navBar ${menuOpen ? "open" : ""}`}>
                    <a href="#sobre">Sobre nós</a>
                    <a href="#localizacao">Localização</a>
                    <a href="#contato">Contate-nos</a>
                </div>
                <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </div>
            </nav>
        </header>
    );
}
