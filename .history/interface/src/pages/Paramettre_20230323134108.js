// import React from "react";
import "./Style2.css";
import Swal from 'sweetalert2';

 async function Paramettre(){
  function Action(e) {
    let autre = document.getElementById("autre"),
 
      e.preventDefault();
      console.log('Le lien a été cliqué.');
   

  }
  const { value: formValues } = await Swal.fire({
    title: "Parametre d'arrosage",
    html:
      `
      <div class='d-flex flex-column'>
     
      <label id="labe" class="labe1">Nom du plante</label>
        <select id="swal-input1" class="swal2-input">
          <option>Salade</option>
          <option>Tomate</option>
          <option>
            <button id="autre"onClick={(e) => Action(e)}>Autres</button>
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
      
    
       

       
      ]
    }
  })
  
  /* if (formValues) {
    Swal.fire(JSON.stringify(formValues))
  } */
/* return(



);

 */
}
export default Paramettre;  