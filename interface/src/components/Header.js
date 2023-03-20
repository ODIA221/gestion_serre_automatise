import './Style1.css'
import logoOumaAgri from '../images/logo.png'
import serre from '../images/Serre.jpeg'

import image1 from '../images/imageBG1.png'
import salade from '../images/salade.png'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()
  return (
 <div id='entête'>
     
    {/* //Menu de navigation */}
    <div id='menuNav' >
        <button id="btnMenuNav"><Link to="/Dashboard">Tableau de bord </Link> </button>
        <button id="btnMenuNav"> <Link to="/Dashboard/ChangePW">Changer de Mot de passe</Link></button>
        <button id="btnMenuNav"> <Link to="/Dashboard/Paramettre_plante">Paramètres Plantes</Link></button>
        
        <select  onChange={(e)=> navigate(e.target.value)} id="btnMenuNav" > 
        <option >Historique</option>
        <option >Historique des plantes</option>
        <option value='/Dashboard/Historique'>Historique de la serre</option>
        </select>
        <span className="material-symbols-outlined" id="btnMenuNav">logout</span>
    </div>
    {/* //logo, description et photo serre */}
    <div id='infoNav' >
      <div > <img src={logoOumaAgri} id="imageHeader" alt="Logo Ouma Agri" /></div>   
      <div id="textHeader"> Sur cette application vous pourrez manipuler votre serre automatisée <br/> et  visualiser les informations de cette dernière </div>
      <div><img src={serre} id="imageHeader" alt="serre" /></div>
    </div>
    {/* Valeur à temp réel */}
    <div id='VTR'>
        <div id="imagesVTR">
         <img src={image1} id="ImageVTR" alt="" />
         <img src={salade} alt=""id="ImageSaladeVTR"  />
       </div>
        <span id="containerVTRTempérature">
            <span id="SouscontainerVTRTempérature"> 
                <b>Température</b>
                <br/> 28°C
            </span>
            <span id="SouscontainerVTRTempérature"> 
               <b>Humidité</b>  
                <br/>Sol : 41%
                <br/>Serre : 67%
            </span> 
            <span id="SouscontainerVTRTempérature"> 
                <b>Luminosité</b>
                <br/> 80 lux
            </span>
        </span>
       </div>
    </div>


    
  )
}

export default Header;
