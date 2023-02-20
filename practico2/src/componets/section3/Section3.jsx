import React from 'react';
import './Section3.css'
import img1 from '../../assets/img/comida_1.jpg'
import img2 from '../../assets/img/comida_2.png'
import img3 from '../../assets/img/comida_3.png'

const Section3 = () => {
    return(
        <section className='seccion3' id='recomen'>
            <div>
                <div className='subdiv3'>
                    <h1>
                        ¡Abiertos hoy!
                    </h1>
                    <p>
                        Ten algunas recomendaciones para el día de hoy. Nuestros expertos gourmets escogieron algunos de los mejores lugares que abren hoy.
                    </p>
                    <button className='botondesc'>
                        Descarga nuestra app
                    </button>
                </div>
                <div className='recomenimg'>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                </div>
            </div>
        </section>
    )
}

export { Section3 }