import React from 'react';
import './Section1.css'


const Section1 = () => {
    return(
        <section>
            <div className='divpadre'>
                <div className='subdiv2'>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <div className='contex'>
                        <h2>
                            Directamente a tí
                        </h2>  
                        <p>
                            Resive tu pedido en mano en pocos minutos
                        </p>            
                    </div>
                </div>
                <div className='subdiv2'>
                    <div>
                        
                    </div>
                    <div className='contex'>
                        <h2>
                            Pago seguro
                        </h2>
                        <p>
                            El pago se hace a través del sitio WEB completamente seguro
                        </p>            
                    </div>
                </div>
                <div className='subdiv2'>
                    <div>
                        
                    </div>
                    <div className='contex'>
                        <h2>
                            Suma créditos
                        </h2>
                        <p>
                            Obten recompensas y descuentos únicos con tu compra
                        </p>             
                    </div>
                </div>
                <div className='subdiv2'>
                    <div>
                        
                    </div>
                    <div className='contex'>
                        <h2>
                            A cualquier hora
                        </h2>
                        <p>
                            Atención las 24 horas del día, los 365 días del año
                        </p>              
                    </div>
                </div>
            </div>
            <div className='divpadre2'>
                <div className='textgrand'>
                    <div className='contex'>
                        <h2>
                            Escoge una ciudad:
                        </h2>
                        <p>
                            Atención completa en cualquier lugar, más de 2.500 restaurantes listos para servirte
                        </p>
                    </div>
                    <div className='listaciudad'>
                        <ul className='ciudad'>
                            <li>Buenos Aires</li>
                            <li>Beijing</li>
                            <li>Berlín</li>
                            <li>Londres</li>
                            <li>Nueva York</li>
                        </ul>
                        <ul className='ciudad'>
                            <li>Delhi</li>
                            <li>Sâo Paolo</li>
                            <li>París</li>
                            <li>Barcelona</li>
                            <li>Tokyo</li>
                        </ul>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </section>
    )
}

export { Section1 }