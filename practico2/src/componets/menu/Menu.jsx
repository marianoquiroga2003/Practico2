import React from 'react';
import './Menu.css'

const BarraMenu = () => {
    
    return(
        <div className='menu'>
            <nav className='nav1'>
                <a className='item' href="">Inicio</a>
                <a className='item' href="">¿Quienes somos?</a>
                <a className='item' href="">Contacto</a>
                <button className='item' >Descargue nuestra app</button>
            </nav>
            <nav className='nav2'>
                <a className='item' href=""><span class="material-symbols-outlined">home</span></a>
                <a className='item' href=""><span class="material-symbols-outlined">info</span></a>
                <a className='item' href=""><span class="material-symbols-outlined">forum</span></a>
                <button className='item' ><span class="material-symbols-outlined">download</span></button>
            </nav>
            <div className='hambur'>
                <div className='menuhambur'>
                <span className='cerrar' class="material-symbols-outlined">close</span>
                <span className='abrir' class="material-symbols-outlined">menu</span>
                <button className='item' ><span class="material-symbols-outlined">download</span></button>
                </div>
                <nav className='nav3'>
                    <a className='item' href="">Inicio</a>
                    <a className='item' href="">¿Quienes somos?</a>
                    <a className='item' href="">Contacto</a>
                </nav>
            </div>
        </div>
    )
}

export {BarraMenu} 