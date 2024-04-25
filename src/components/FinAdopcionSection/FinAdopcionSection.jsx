import React from 'react'
import "./FinAdopcionSection.css"
import { Link } from 'react-router-dom';

function FinAdopcionSection() {
  return (
    <div id='FinAdopcionSectionContainer'>
        <h1 id='FinAdopcionSectionTittle'>Tu solicitud se guardó correctamente.  </h1>
        <div id='FinAdopcionSectionDownContainer'>
            <div id='FinAdopcionSectionDownContainerLeft'>
                <img id='FinAdopcionSectionDownContainerLeftImage' src="/public/Assets/LogoCuadrado.png" alt="" />
                <div id='FinAdopcionSectionDownContainerLeftTextContainer'>
                <h1 id='FinAdopcionSectionDownContainerLeftParraph'>Revisaremos tus datos y nos contactaremos contigo en breve.</h1>
                </div>
                <Link to="/">
                <button id='FinAdopcionSectionDownContainerLeftButton'>Regresar a la página principal</button></Link>
               
            </div>
            <div id='FinAdopcionSectionDownContainerRight'>
                <img src="/public/Assets/pesronaConPerro.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default FinAdopcionSection