import React, { useRef } from 'react';
import './Footer.css'
import emailjs from '@emailjs/browser';

const Footer = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_fd9b43g', 'template_2jod4td', form.current, 'ZqT5sozF2Z674gwO-')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return(
        <footer>
            <div className='divpadrefooter'>
                <div className='divform'>
                    <p>Con gusto nos comunicaremos contigo, déjanos tu email y suscríbete a nuestro Newsletter</p>
                    <form ref={form} onSubmit={sendEmail} className='mail footermail' action="">
                        <button type="submit" value="Send"><i class="bi bi-send-fill"></i></button>
                        <input type="email" name='user_email' placeholder='Ingresa tu email...'/>
                    </form>
                </div>
                <div>
                    <h2>
                        ¿En qué podemos ayudarte?
                    </h2>
                    <ul>
                        <li>
                            <a href="#servicios">Nuestros servicios</a>
                        </li>
                        <li>
                            <a href="#recomen">Recomendaciones</a>
                        </li>
                        <li>
                            <a href="#appli">Baja nuestra app</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>
                        ¿Quieres saber más?
                    </h2>
                    <ul>
                        <li>
                            <a href="">Nuestro Instagram</a>
                        </li>
                        <li>
                            <a href="">Nuestro blog</a>
                        </li>
                        <li>
                            <a href="">Nuestros locales</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export { Footer }