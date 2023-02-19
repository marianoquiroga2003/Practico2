import React from 'react';
import './Section5.css'
import appstore from '../../assets/img/appstore.png'
import googleplay from '../../assets/img/googleplay.png'

const Section5 = () => {
    return(
        <section className='seccion5' id='appli'>
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
                <div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export { Section5 }