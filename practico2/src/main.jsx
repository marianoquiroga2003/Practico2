import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BarraMenu} from './componets/menu/Menu'
import { Hero } from './componets/hero/Hero'
import { Section1 } from './componets/section1/Section1'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BarraMenu/>
    <Hero/>
    <Section1/>
    <App/>
  </React.StrictMode>,
)
