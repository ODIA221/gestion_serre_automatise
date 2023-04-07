import React, { useState } from 'react'
import './Style2.css'
import porteO from '../images/porteO.png'
import porteF from '../images/porteF.png'
import extracteurOn from '../images/extracteurOn.gif'
import extracteurOff from '../images/extracteurOff.png'
import insectAbsent from '../images/insectAbsent.png'
import insectPresent from '../images/insectPresent.png'
import toitO from '../images/toitO.png'
import toitF from '../images/toitF.png'
import nonArrosage from '../images/nonArrosage.png'
import arrosage from '../images/arrosage.gif'
import io from 'socket.io-client'
const TableauDB = () => {

  
  let extracteur = "Éteint"
  
  let [etatToit, setEtatToit] = useState(toitO);
  let [etatArrosage, setEtatArrosage] = useState(nonArrosage);
 

const socket = io('ws://localhost:5000')

// /////////////////////// insecte ////////////////
let [etatInsectes, setEtatInsectes] = useState(false);

socket.on('insecte', (data) =>{
  console.log(data);
 if(data == 'Present'){
  setEtatInsectes(true)
 }else{
  setEtatInsectes(false)
 }
})

//////////////////// POrte ///////////////////:
let [etatPorte, setEtatPorte] = useState(false);
socket.on('porte', (data) =>{
  console.log(data);
 if(data == 'ouverte'){
  setEtatPorte(false)
 }else{
  setEtatPorte(true)
 }
})
 
  
  let [etatExtracteur, setEtatExtracteur] = useState(extracteur);
  if ( etatExtracteur === "Allumé") {
    extracteur = etatExtracteur
    setEtatExtracteur(extracteurOn)
  } else if ( etatExtracteur === "Éteint") {
    extracteur = etatExtracteur
    setEtatExtracteur(extracteurOff)
  }

 
 

 
  
  
  return (
    <div id='containerGeneralDash2'>
      <div>
      <div class='headerDash2'>États</div>
      <div class='containerDash2'>

         {!etatPorte ? <div class='elementDash2'>
            <h5>Porte</h5>
            <img src={porteO} class="imageDash2" alt="" />
            <h5> Ouverte</h5>
          </div> :
          <div class='elementDash2'>
            <h5>Porte</h5>
            <img src={porteF} class="imageDash2" alt="" />
            <h5> Fermée</h5>
          </div>}

          <div class='elementDash2'>
            <h5>Extracteur d'air</h5>
            <img src={etatExtracteur} class="imageDash2" alt="" />
            <h5> {extracteur} </h5>
          </div>

          {!etatInsectes ? <div class='elementDash2'>
            <h5>Présence d'insectes</h5>
            <img src={insectAbsent} class="imageDash2" alt="" />
            <h5> Absent</h5>
          </div> :
          <div class='elementDash2'>
            <h5>Présence d'insectes</h5>
            <img src={insectPresent} class="imageDash2" alt="" />
            <h5> Présent</h5>
          </div>}
      </div>
      </div>
      <div >
      <div class='headerDash2C '>Contrôles</div>
      <div class='containerDash2C '>
          <div class='elementDash2 '>
            <h5>Toit de la serre</h5>
            <img src={etatToit} class="imageDash2" alt="" />
            <div class='btnDash'>
            <button class="btn btn-danger" onClick={() => setEtatToit(toitF)}> Fermer</button>
            <button class="btn btn-success" onClick={() => setEtatToit(toitO)}> Ouvrir</button>
            </div>
          </div>

          <div class='elementDash2 '>
            <h5>Arrosage</h5>
            <img src={etatArrosage} class="  imageDashC2" alt="" />
            <div class='btnDash'>
            <button class="btn btn-danger" onClick={() => setEtatArrosage(nonArrosage)}> Fermer</button>
            <button class="btn btn-success" onClick={() => setEtatArrosage(arrosage)} > Ouvrir</button>
            </div>
          </div>
      </div>
    </div>
    </div>
  )}


export default TableauDB