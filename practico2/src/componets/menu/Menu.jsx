import React, { useState } from 'react';
import './Menu.css'

const BarraMenu = () => {

    const [isOpen, setIsOpen] = useState(false)

    return(
        <div className='menu'>
            <nav className='nav1'>
                <a className='item' href="#hero">Inicio</a>
                <a className='item' href="#servicios">¿Quienes somos?</a>
                <a className='item' href="#footer">Contacto</a>
                <button className='item' >Descargue nuestra app</button>
            </nav>
            <nav className='nav2'>
                <a className='item' href="#hero"><span className='material-symbols-outlined'>home</span></a>
                <a className='item' href="#servicios"><span className='material-symbols-outlined'>info</span></a>
                <a className='item' href="#footer"><span className='material-symbols-outlined'>forum</span></a>
                <button className='item' ><span className='material-symbols-outlined'>download</span></button>
            </nav>
            <div className='hambur'>
                <div className='menuhambur'>
                    <span onClick={ () => setIsOpen(!isOpen)} className={`material-symbols-outlined menuha ${isOpen && "open"}`}>menu</span>
                    <span onClick={ () => setIsOpen(!isOpen)} className={`material-symbols-outlined menuhac ${isOpen && "open"}`}>close</span>
                    <button className='item'><span class="material-symbols-outlined download">download</span></button>
                </div>
                <nav className={`nav3 ${isOpen && "open"}`}>
                    <a className='item3' href="#hero">Inicio</a>
                    <a className='item3' href="#servicios">¿Quienes somos?</a>
                    <a className='item3' href="#footer">Contacto</a>
                    <div className='oscuro'>
                        <p>ola</p>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export {BarraMenu} 