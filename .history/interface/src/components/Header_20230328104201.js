import './Style1.css'
import logoOumaAgri from '../images/logo.png'
import serre from '../images/Serre.jpeg'
import image1 from '../images/imageBG1.png'
import salade from '../images/salade.png'
import { useState } from 'react'
import { confirmAlert } from 'react-confirm-alert'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()
  const [open, setOpen] = useState('')
  const [autre, setAutre] = useState(false)
  const [debit, setDebit] = useState(false)
  const [debitdif, setDebitdif] = useState(false)
  const [confirm, setConfirm] = useState(false)
  const [close, setClose] = useState()


  const popup = () => {
    setOpen('d-block')
    if (await confirm()){
      setClose (true);
    }
    
  }
  

  const autres = (e) => {
    if (e.target.value === "autres") {
      setAutre(true)
      setDebit(false)
      setDebitdif(false)
    } else {
      setAutre(false)
    }
  }
  const debits = (e) => {
    if (e.target.value === "debits") {
      setDebit(true)
      setAutre(false)
    } else {
      setDebit(false)
    }
  }
  const debitdifs = (e) => {
    if (e.target.value === "debitdifs") {
      setDebitdif(true)
      setAutre(false)
    } else {
      setDebitdif(false)
    }
  }

  return (
    <div id='entête'>

      {/* //Menu de navigation */}
      <div id='menuNav' >
        <button id="btnMenuNav"><Link to="/Dashboard/TableauDB">Tableau de bord </Link> </button>
        <button id="btnMenuNav"> <Link to="/Dashboard/ChangePW">Changer de Mot de passe</Link></button>
        <button id="btnMenuNav"> <Link onClick={() => popup()}>Paramètres Plantes</Link></button>

        <select onChange={(e) => navigate(e.target.value)} id="btnMenuNav" >
          <option >Historique</option>
          <option value='/Dashboard/ParametrePlante' >Historique des plantes</option>
          <option value='/Dashboard/Historique'>Historique de la serre</option>
        </select>
        <span className="material-symbols-outlined" id="btnMenuNav">logout</span>
      </div>
      {/* //logo, description et photo serre */}
      <div id='infoNav' >
        <div > <img src={logoOumaAgri} id="imageHeader" alt="Logo Ouma Agri" /></div>
        <div id="textHeader"> Sur cette application vous pourrez manipuler votre serre automatisée  et  visualiser les informations de cette dernière </div>
        <div><img src={serre} id="imageHeader" alt="serre" /></div>
      </div>
      {/* Valeur à temp réel */}
      <div id='VTR'>
        <div id="imagesVTR">
          <img src={image1} id="ImageVTR" alt="" />
          <img src={salade} alt="" id="ImageSaladeVTR" />
        </div>
        <span id="containerVTRTempérature">
          <span id="SouscontainerVTRTempérature">
            <b>Température</b>
            <br /> 28°C
          </span>
          <span id="SouscontainerVTRTempérature">
            <b>Humidité</b>
            <br />Sol : 41%
            <br />Serre : 67%
          </span>
          <span id="SouscontainerVTRTempérature">
            <b>Luminosité</b>
            <br /> 80 lux
          </span>
        </span>
      </div>

      {/*     parametrage plante
 */}      <div className={`modal ${open}`} tabindex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div id='modalparam' className="modal-content">
            <div className="modal-header d-flex justify-content-center">
              <h5 className="modal-title h2">Parametre d'arrosage</h5>
              {/*  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
            </div>
            <div class="modal-body">
              <form id='param'>
                <div class='d-flex flex-column'>
                  <label class="labe1">Nom du plante</label>
                 {(!debit && !debitdif) ? <select onChange={(e) => autres(e)} id="swal-input1" class="swal2-input">
                    <option>Salade</option>
                    <option>Tomate</option>
                    <option value='autres'>Autres</option>
                  </select>: <input type="text" placeholder='donnez une plante'/>}
                  
                  {!debit && !debitdif && !autre && <>
                    <label class="labe3">Heure d'arrosage</label>
                    <select id="swal-input1" class="swal2-input">
                      <option>08h-17h</option>
                      <option>09h-18h</option>
                      <option>11h-19h</option>
                    </select>
                  </>}

                  {!autre && <>
                    <label class="labe2">Durée</label>
                      <select id="swal-input1" class="swal2-input">
                      <option>5mns</option>
                      <option>10mns</option>
                      <option>20mns</option>
                    </select>
                  </>}

                  {
                    autre && <>
                      <div class="d-flex justify-content-center mt-4 gap-3">
                        <button onClick={(e) => debits(e)} class="md" value='debits'>même debit</button>

                        <button onClick={(e) => debitdifs(e)} class="md" value='debitdifs'>débits différents</button>
                      </div>
                    </>
                  }
                  {
                    debit && <>
                     
                      <label class="labe2">Premiere Heure</label>
                      <select id="swal-input1" class="swal2-input">
                        <option>8h</option>
                        <option>10h</option>
                        <option>12h</option>
                      </select>
                      <label class="labe2">Deuxiéme Heure</label>
                      <select id="swal-input1" class="swal2-input">
                        <option>16h</option>
                        <option>18h</option>
                        <option>19H</option>
                      </select>
                    </>
                  }
                  {
                    debitdif && <>
                
                      <label class="labe2">Premiere Heure</label>
                      <select id="swal-input1" class="swal2-input">
                        <option>8h</option>
                        <option>10h</option>
                        <option>12h</option>
                      </select>

                      <label class="labe2">Durée</label>
                      <select id="swal-input1" class="swal2-input">
                        <option>5mns</option>
                        <option>10mns</option>
                        <option>20mns</option>
                      </select>
                      <label class="labe2">Deuxiéme Heure</label>
                      <select id="swal-input1" class="swal2-input">
                        <option>16h</option>
                        <option>18h</option>
                        <option>19H</option>
                      </select>
                    </>
                  }


                  <div class="d-flex gap-2 justify-content-center mt-5">
                    <button onClick={() => setOpen('')} class="butA">Annulé</button>
                                 
                    <button id="butM" onClick={() => setClose(true)}  class="btn btn-success">Modifié</button>
              
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>



  )
}

export default Header;
