import React from 'react';
import './Section5.css'
import appstore from '../../assets/img/appstore.png'
import googleplay from '../../assets/img/googleplay.png'

const Section5 = () => {
    const errorCompra = () =>{
        errorCompra.classlist.toogle('apagado', '')
    }
    return(
        <section className='seccion5' id='appli'>
{/*            <div id='errorcompra' className='errorcompra apagado'>
                <h1>Lamentablemente, nuestros servidores no están disponibles.</h1>
                <p>Intenta de nuevo más tarde</p>
    </div> */}
            <div className='divpadre5'>
                <div className='subdiv6'>
                    <h1>
                        O deja que nosotros nos encarguemos de alimentarte
                    </h1>
                    <p>
                        Nuestro servicio especializado de catering ofrese diversas opciones para todo tipo de comensales, todo gestionado desde una simple app
                    </p>
                    <ul className='listaserv'>
                        <li>
                            <i class="bi bi-chat-dots-fill"></i>
                            <p>
                                Soporte por chat 24/7
                            </p>
                        </li>
                        <li>
                            <span class="material-symbols-outlined">eco</span>
                            <p>
                                Envio completamente eco-friendly
                            </p>
                        </li>
                        <li>
                            <i class="bi bi-gift-fill"></i>
                            <p>
                                Recompensas de usuario leal
                            </p>
                        </li>
                        <li>
                            <i class="bi bi-star-fill"></i>
                            <p>
                                Puntuación promedio 5 estrellas
                            </p>
                        </li>
                    </ul>
                    <div className='divboton5'>
                        <button>
                            <a href="https://www.apple.com/la/app-store/"><img src={appstore} alt="" /></a>
                        </button>
                        <button>
                            <a href="https://play.google.com/store/games?hl=es"><img src={googleplay} alt="" /></a>
                        </button>
                    </div>
                </div>
                <div className='productdiv'>
                    <div className='producto'>
                        <h2>
                            Paquete simple
                        </h2>
                        <h1>
                            <span>U$S</span> 30.00
                        </h1>
                        <ul>
                            <li>
                                Almuerzo y cena
                            </li>
                            <li>
                                20 personas
                            </li>
                            <li>
                                Para eventos
                            </li>
                            <li>
                                Atención 24/7
                            </li>
                        </ul>
                        <button onClick={errorCompra} className='probot'>
                            <h3>
                                Comprar
                            </h3>
                        </button>
                    </div>
                    <div className='producto'>
                        <h3>
                            mayor conveniencia
                        </h3>
                        <h2>
                            Paquete ejecutivo
                        </h2>
                        <h1>
                            <span>U$S</span>40.00
                        </h1>
                        <ul>
                            <li>
                                Desayuno, almuerzo y cena
                            </li>
                            <li>
                                30 personas
                            </li>
                            <li>
                                Para eventos
                            </li>
                            <li>
                                Para empresas
                            </li>
                            <li>
                                Opciones veganas
                            </li>
                            <li>
                                Atención 24/7
                            </li>
                        </ul>
                        <button onClick={errorCompra} className='probot'>
                            <h3>
                                Comprar
                            </h3>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export { Section5 }