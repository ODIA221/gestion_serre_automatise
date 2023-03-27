import './Style1.css'
import logoOumaAgri from '../images/logo.png'
import serre from '../images/Serre.jpeg'
import Swal from 'sweetalert2';

import image1 from '../images/imageBG1.png'
import salade from '../images/salade.png'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()
  const popup = () => {
    Swal.fire({
      title: "Parametre d'arrosage",
      html:
        `
        <div class='d-flex flex-column'>
       
        <label id="labe" class="labe1">Nom du plante</label>
          <select id="swal-input1" class="swal2-input">
            <option>Salade</option>
            <option>Tomate</option>
            <option>
              <button id="autre" onclick="Action()">Autres</button>
            </option>
          </select>
          
          <label id="labe" class="labe2">Durée</label>
          <select id="swal-input1" class="swal2-input">
            <option>5mns</option>
            <option>10mns</option>
            <option>20mns</option>
          </select>
  
          <label id="labe" class="labe3">Heure d'arrosage</label>
          <select id="swal-input1" class="swal2-input">
            <option>08h-17h</option>
            <option>09h-18h</option>
            <option>11h-19h</option> 
          </select>
  
          <div class="d-flex gap-2 justify-content-center mt-5">
            <button class="butA">Annulé</button>
            <button class="butM">Modifié</button>
          </div>
        </div>
        `,
  
      showConfirmButton: false,
      preConfirm: () => {
        return [
        
      
         function Action(e) {
          let autre = document.getElementById("autre");
       
            e.preventDefault();
            console.log('Le lien a été cliqué.');
         
  
        }
  
         
        ]
      }
    })
  }
  return (
 <div id='entête'>
     
    {/* //Menu de navigation */}
    <div id='menuNav' >
        <button id="btnMenuNav"><Link to="/Dashboard">Tableau de bord </Link> </button>
        <button id="btnMenuNav"> <Link to="/Dashboard/ChangePW">Changer de Mot de passe</Link></button>
        <button id="btnMenuNav"> <Link to="">Paramètres Plantes</Link></button>
        
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
