import React from 'react';
import './Section2.css'

const Section2 = () => {
    return(
        <section className='secciondiv'>
            <div className='divisor'>
                <div className='contador'>
                    <h2>
                        312.144
                    </h2>
                    <p>
                        Ordenes en el último año
                    </p>
                </div>
                <div className='contador'>
                    <h2>
                        15.113
                    </h2>
                    <p>
                        Ordenes en el último mes
                    </p>
                </div>
                <div className='contador'>
                    <h2>
                        4.050
                    </h2>
                    <p>
                        Ordenes en la última semana
                    </p>
                </div>
                <div className='contador'>
                    <h2>
                        167
                    </h2>
                    <p>
                        En el día
                    </p>
                </div>
            </div>
        </section>
    )
}

export { Section2 }