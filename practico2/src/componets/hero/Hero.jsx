import React from 'react';
import './Hero.css'
import Hombre from '../../assets/img/hombre.png'

const Hero = () => {
    return(
        <header>
            <div className='div1'>
                <div className='subdiv1'>
                    <h1>
                        Directamente a tí
                    </h1>
                    <p>
                        Ordena comida desde tu computadora a más de 2500 restaurantes.
                    </p>
                    <ul>
                        <li>
                            Compara precios
                        </li>
                        <li>
                            Compara tiempos de entrega
                        </li>
                        <li>
                            Has tu orden
                        </li>
                    </ul>
                </div>
                <div className='subdiv1 subimg'>
                    <img src={Hombre} alt="Hombre caminando con canasta de fruta" />
                </div>
            </div>
        </header>
    )
}

export { Hero }