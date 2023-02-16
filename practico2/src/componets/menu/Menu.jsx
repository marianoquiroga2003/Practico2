import React, { useState } from 'react';
import './Menu.css'

const BarraMenu = () => {

    const abrirMenu = () => {
        menuha.classList.toogle('cerrado')
    }

    return(
        <div className='menu'>
            <nav className='nav1'>
                <a className='item' href="">Inicio</a>
                <a className='item' href="">¿Quienes somos?</a>
                <a className='item' href="">Contacto</a>
                <button className='item' >Descargue nuestra app</button>
            </nav>
            <nav className='nav2'>
                <a className='item' href=""><span className='material-symbols-outlined'>home</span></a>
                <a className='item' href=""><span className='material-symbols-outlined'>info</span></a>
                <a className='item' href=""><span className='material-symbols-outlined'>forum</span></a>
                <button className='item' ><span className='material-symbols-outlined'>download</span></button>
            </nav>
            <div className='hambur'>
                <div className='menuhambur'>
                    <span id='menuha' onClick={abrirMenu} className='material-symbols-outlined menuha'>menu</span>
                    <span id='menuha' className='material-symbols-outlined menuha cerrado'>close</span>
                    <button className='item'><span class="material-symbols-outlined download">download</span></button>
                </div>
                <nav className='nav3 cerrado'>
                    <a className='item' href="">Inicio</a>
                    <a className='item' href="">¿Quienes somos?</a>
                    <a className='item' href="">Contacto</a>
                    <div className='oscuro'>a</div>
                </nav>
            </div>
        </div>
    )
}

export {BarraMenu} 