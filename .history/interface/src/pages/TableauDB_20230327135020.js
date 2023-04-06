import React, { useState } from 'react'
import './Style2.css'
import porteO from '../images/porteO.png'
import porteF from '../images/porteF.png'
import extracteurOn from '../images/extracteurOn.gif'
import extracteurOff from '../images/extracteurOff.png'
import insectAbsent from '../images/insectAbsent.png'
import insectPresent from '../images/insectPresent.gif'
import toitO from '../images/toitO.png'
import toitF from '../images/toitF.png'
import nonArrosage from '../images/nonArrosage.png'
import arrosage from '../images/arrosage.gif'
const TableauDB = () => {
  let x,
  let y;
  let z;
  
  let porte = "Ouvert" 
  let extracteur = "Éteint"
  let insectes = "Absent"
  let [etatToit, setEtatToit] = useState(toitO);
  let [etatArrosage, setEtatArrosage] = useState(nonArrosage);
  
  let [etatPorte, setEtatPorte] = useState(porte);
  if ( etatPorte === "Ouvert") {
    porte = etatPorte
    setEtatPorte(porteO)
  } else if ( etatPorte === "Fermée") {
    porte = etatPorte
    setEtatPorte(porteF)
  }
  
  let [etatExtracteur, setEtatExtracteur] = useState(extracteur);
  if ( etatExtracteur === "Allumé") {
    extracteur = etatExtracteur
    setEtatExtracteur(extracteurOn)
  } else if ( etatExtracteur === "Éteint") {
    extracteur = etatExtracteur
    setEtatExtracteur(extracteurOff)
  }

  let [etatInsectes, setEtatInsectes] = useState(insectes);
  if ( etatInsectes === "Présent") {
    insectes = etatInsectes
    setEtatInsectes(insectPresent)
  } else if ( etatInsectes === "Absent") {
    insectes = etatInsectes
    setEtatInsectes(insectAbsent)
  }
 

 
  
  
  return (
    <div id='containerGeneralDash2'>
      <div >
      <div class='headerDash2'>ÉTATS</div>
      <div class='containerDash2'>

          <div class='elementDash2'>
            <h3>Porte</h3>
            <img src={etatPorte} class="imageDash2" alt="" />
            <h3> {porte}</h3>
          </div>

          <div class='elementDash2'>
            <h3>Extracteur d'air</h3>
            <img src={etatExtracteur} class="imageDash2" alt="" />
            <h3> {extracteur} </h3>
          </div>

          <div class='elementDash2'>
            <h3>Présence d'insectes</h3>
            <img src={etatInsectes} class="imageDash2" alt="" />
            <h3> {insectes}</h3>
          </div>
      </div>
      </div>
      <div >
      <div class='headerDash2 '>CONTRÔLE</div>
      <div class='containerDash2 '>
          <div class='elementDash2 '>
            <h3>Toit de la serre</h3>
            <img src={etatToit} class="imageDash2" alt="" />
            <div class='btnDash'>
            <button class="btn btn-danger" onClick={() => setEtatToit(toitF)}> Fermer</button>
            <button class="btn btn-success" onClick={() => setEtatToit(toitO)}> Ouvrir</button>
            </div>
          </div>

          <div class='elementDash2 '>
            <h3>Arrosage</h3>
            <img src={etatArrosage} class=" imageDash2 imageDash22" alt="" />
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