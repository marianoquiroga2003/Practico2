import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BarraMenu} from './componets/menu/Menu'
import { Hero } from './componets/hero/Hero'
import { Section1 } from './componets/section1/Section1'
import { Section2 } from './componets/section2/Section2'
import { Section3 } from './componets/section3/Section3'
import { Section4 } from './componets/section4/Section4'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BarraMenu/>
    <Hero/>
    <Section1/>
    <Section2/>
    <Section3/>
    <Section4/>
    <App/>
  </React.StrictMode>,
)
