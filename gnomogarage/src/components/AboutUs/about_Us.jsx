import logo from '../../assets/logo_Garage.png';
import './about_Us.css';

export default function AboutUs() {
    return (
        <div className='about-us'>
            <img src={logo} alt="Logo do Gnomo Garage" className='logo' />
            <div className='text'>
            <h1>SOBRE NÓS</h1>
            <p>Bem-vindo ao Gnomo Garage, onde a paixão por carros clássicos e a excelência em restauração se encontram. Fundada por um grupo de entusiastas automotivos, nossa missão é preservar a história automotiva e transformar veículos antigos em obras-primas modernas. Com uma equipe de especialistas altamente qualificados, oferecemos serviços de restauração completos, desde a mecânica até a estética. Cada projeto é tratado com cuidado e atenção aos detalhes, garantindo que cada carro que passa por nossas mãos seja restaurado à sua glória original. No Gnomo Garage, acreditamos que cada carro tem uma história única para contar. Estamos comprometidos em manter viva a herança automotiva, </p>
            </div>
        </div>
        );
} 