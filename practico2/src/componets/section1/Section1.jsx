import React from 'react';
import './Section1.css'
import image1 from '../../assets/img/Sin título-1-01.png'
import image2 from '../../assets/img/Sin título-1-02.png'
import image3 from '../../assets/img/Sin título-1-03.png'
import image4 from '../../assets/img/Sin título-1-04.png'
import imgfondo from '../../assets/img/imgfondo1.png'


const Section1 = () => {
    return(
        <section id='servicios' className='seccion1'>
            <div className='divpadre'>
                <div className='subdiv2' >
                    <div className='imgdiv'>
                        <img src={image1} alt=""/>
                    </div>
                    <div className='contex'>
                        <h2>
                            Directamente a tí
                        </h2>  
                        <p>
                            Entrega en mano en pocos minutos
                        </p>            
                    </div>
                </div>
                <div className='subdiv2'>
                    <div className='imgdiv'>
                        <img src={image2} alt="" />
                    </div>
                    <div className='contex'>
                        <h2>
                            Pago seguro
                        </h2>
                        <p>
                            Alta seguridad para el pago
                        </p>            
                    </div>
                </div>
                <div className='subdiv2'>
                    <div className='imgdiv'>
                        <img src={image3} alt="" />
                    </div>
                    <div className='contex'>
                        <h2>
                            Suma créditos
                        </h2>
                        <p>
                            Obten recompensas y descuentos únicos
                        </p>             
                    </div>
                </div>
                <div className='subdiv2'>
                    <div className='imgdiv'>
                        <img src={image4} alt="" />
                    </div>
                    <div className='contex'>
                        <h2>
                            A cualquier hora
                        </h2>
                        <p>
                            Atención las 24 horas del día, todos los días
                        </p>              
                    </div>
                </div>
            </div>
            <div className='divpadre2'>
                <div className='textgrand'>
                    <div className='contex datos'>
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
                <div className='divimg2'>
                    <img className='imgfondo' src={imgfondo} alt="" />
                </div>
            </div>
        </section>
    )
}

export { Section1 }