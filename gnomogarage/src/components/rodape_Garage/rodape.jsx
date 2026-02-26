import logo_Garage from'../../assets/logo_Garage(sem fundo).png'
export default function Rodape() {
    return (
        <form className='rodape'>
            <img src={logo_Garage} alt="logo Garage" className='logoGarage'/>
            <p className='rodape_Texto'>© 2026. Criado por Luiz Filipe e Rafaela.</p>
            <p className='rodape_Endere'>R. Manpel Augusto da Rosa - Parque das Avenidas, Sombrio - SC, CEP: 88960-000.</p>
        </form>
    );
}