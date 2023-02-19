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
                <div>
                    Con gusto nos comunicaremos contigo, déjanos tu email y suscríbete a nuestro Newsletter
                    <form ref={form} onSubmit={sendEmail} className='mail' action="">
                        <button type="submit" value="Send" className='enviarboton'><i class="bi bi-send-fill"></i></button>
                        <input type="email" name='user_email' placeholder='Ingresa tu email...'/>
                    </form>
                </div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
        </footer>
    )
}

export { Footer }