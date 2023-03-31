import './Style1.css'
import logoOumaAgri from '../images/logo.png'
import serre from '../images/Serre.jpeg'
import image1 from '../images/imageBG1.png'
import salade from '../images/salade.png'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";

function Header() {
  const navigate = useNavigate()
  const [open, setOpen] = useState('')
  const [autre, setAutre] = useState(false)
  const [debit, setDebit] = useState(false)
  const [debitdif, setDebitdif] = useState(false)



  const popup = () => {
    setOpen('d-block')  
  
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




  

  /*--------Déclarations fonction pour Popup modicfication Mot de passe --------*/

      /* controle de saisie avec hook form */
      const {
        register,
        formState: { errors },
        handleSubmit,
        watch,
      } = useForm(
        {mode:"onChange"}
      );

    /* déclaration onSubmit */
    const onSubmit  = (data) => console.log (data);

    /* hooks popup */
    const [popupMdp,setPop]=useState(false);

    /* recupérer input  Mdp entrer  */
    const nouveauMdp = watch ('nouveauMdp');
 
    /* fonction afficher popup */
    const handleClickOpen=()=>{
        setPop(true)
        
    }
    /* Fonction annuler */
    const closePopup=()=>{
        setPop(false);
        window.location.reload();
    }
 /*--------Fin Déclarations fonction pour Popup modicfication Mot de passe --------*/




  return (
    <div id='entête'>

      {/* //Menu de navigation */}
      <div id='menuNav' >
        <button id="btnMenuNav"><Link to="/Dashboard/TableauDB">Tableau de bord </Link> </button>
        {/* <button id="btnMenuNav"> <Link to="/Dashboard/ChangePW">Changer de Mot de passe</Link></button> */}
        <button id="btnMenuNav" onClick={handleClickOpen}>Changer de Mot de passe</button> 
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
                  

                  {!autre && <>
                    <label class="labe2">Durée</label>
                      <select id="swal-input1" class="swal2-input">
                      <option>5mns</option>
                      <option>10mns</option>
                      <option>20mns</option>
                    </select>
                  </>}

                  {!debit && !debitdif && !autre && <>
                    <label class="labe3">Heure d'arrosage</label>
                    <select id="swal-input1" class="swal2-input">
                      <option>08h-17h</option>
                      <option>09h-18h</option>
                      <option>11h-19h</option>
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
{/*                     <button onClick={() => alert("Engistrement reussi!")} class="butM">Modifié</button>
 */}                    
                    <button type="button" class="btn btn-success" id="liveToastBtn">Modifié</button>

                          <div class="position-fixed bottom-0 end-0 p-3" style={{z-index: 11"}}/>
                            <div id="liveToast" class="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
                              <div class="toast-header">
                                <img src="..." class="rounded me-2" alt="..."/>
                                <strong class="me-auto">Bootstrap</strong>
                                <small>11 mins ago</small>
                                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                              </div>
                              <div class="toast-body">
                                Hello, world! This is a toast message.
                              </div>
                            </div>


                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>













       {/*----------------Corp Popup Modification mot de passe -------------------------*/}


       <div id='main'>
            {
            popupMdp?
            <div className="popup">
                    <div /* className="mdpForm" */>
                        <div className="popup-header">      
                        </div> 
                        <form  onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <label className="mdpLabel">Actuel Mot de Passe</label>
                                </div>
                                <div>
                                    <input 
                                        className="mdpInput"
                                        placeholder="..."
                                        name="mdp1"
                                        type="password"
                                        {...register("actuelMdp", {
                                            required: "Champ Obligatoire",
                                            
                                            minLength: {
                                              value: 5,
                                              message: "5 Caractètes au minimum"
                                            },
                                            maxLength: {
                                              value:10,
                                              message: "10 Caractètes au maximum"
                                            }
                                            
                                            
                                        })}
                                    />
                                    {/* Message d'erreurs */}
                                    {errors.actuelMdp && <small className='err'>{errors.actuelMdp.message }</small>}
                                </div>  
                                <div>
                                    <div>
                                        <label className="mdpLabel">nouveau Mot de Passe</label>
                                    </div>
                                    <input 
                                        className="mdpInput"
                                        type="password"
                                        placeholder="..."
                                        {...register("nouveauMdp", {
                                          required: "Champ Obligatoire",
                                          
                                          minLength: {
                                            value: 5,
                                            message: "5 Caractètes au minimum"
                                          },
                                          maxLength: {
                                            value:10,
                                            message: "10 Caractètes au maximum"
                                          }
                                          
                                          
                                      })}
                                    />{/* Message d'erreurs */}
                                    {errors.nouveauMdp && <small className='err'>{errors.nouveauMdp.message }</small>}
                                </div>
                                <div>
                                    <label className="mdpLabel">Confirmation Mot de Passe</label>
                                </div>
                                <div>
                                    <input 
                                        className="mdpInput"
                                        placeholder="..."
                                        type="password"
                                        {...register("confirmMdp", {
                                          required: "Champ Obligatoire",

                                          validate: (value) => 
                                          value=== nouveauMdp || "Les mots de passe ne conrrespondent pas !",
                                          
                                          
                                      })}
                                    />
                                    {/* Message d'erreurs */}
                                    {errors.confirmMdp && <small className='err'>{errors.confirmMdp.message }</small>}
                                </div>
                            <div className="mdpBtn">
                                <button onClick={closePopup} className=" btnAnnuler">Annuler</button>
                                <button type="submit" className="btnModifier">  Modifier</button>
                            </div>
                            
                        </form>
                    </div>
            </div>:""
            }
        </div>
        {/*--------------------------- Fin Corp Pop UP modififaction Mot de passe------------------- */}

    </div>






  )
}

export default Header;