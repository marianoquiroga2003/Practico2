import React, { useRef } from 'react';
import './Section4.css'
import emailjs from '@emailjs/browser';


const Section4 = () => {
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
        <section className='seccion4'>
            <div className='divisor'>
                <div className='subdiv4'>
                    <h1>
                        Suscríbete para recibir notificaciones ;)
                    </h1>                   
                </div>
                <div>
                    <form ref={form} onSubmit={sendEmail} className='mail' action="">
                        <button type="submit" value="Send" className='enviarboton'><i class="bi bi-send-fill"></i></button>
                        <input type="email" name='user_email' placeholder='Ingresa tu email...'/>
                    </form>
                </div>
            </div>
        </section>
    )
}

export { Section4 }