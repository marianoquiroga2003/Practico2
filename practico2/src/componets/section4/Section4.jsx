import React from 'react';
import './Section4.css'

const Section4 = () => {
    return(
        <section className='seccion4'>
            <div className='divisor'>
                <div className='subdiv4'>
                    <h1>
                        Suscríbete para recibir notificaciones ;)
                    </h1>                   
                </div>
                <div>
                    <form className='mail' action="">
                        <button className='enviarboton'><i class="bi bi-send-fill"></i></button>
                        <input type="text" name='E-mail' placeholder='Ingresa tu email...'/>
                    </form>
                </div>
            </div>
        </section>
    )
}

export { Section4 }