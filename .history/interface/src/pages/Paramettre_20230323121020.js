// import React from "react";
import "./Style2.css";
import Swal from 'sweetalert2';

 async function Paramettre(){
  const { value: formValues } = await Swal.fire({
    title: "Paramettre d'arrosage",
    html:
      `
      <div class='d-flex flex-column'>
     
      <label>Nom du plante</label>
        <select id="swal-input1" class="swal2-input">
          <option>Salade</option>
          <option>Tomate</option>
          <option>
            <button>Autres</button>
          </option>
        </select>
        
        <label>Durée</label>
        <select id="swal-input1" class="swal2-input">
          <option>5</option>
          <option>10</option>
          <option>20</option>
        </select>

        <label>Heure d'arrosage</label>
        <select id="swal-input1" class="swal2-input">
          <option>08h-17h</option>
          <option>09h-18h</option>
          <option>11h-19h</option> 
        </select>
        <div class="d-flex gap-2 justify-content-center mt-5">
          <button class="">Annulé</button>
          <button>Modifié</button>
        </div>
      </div>
      `,

    showConfirmButton: false,
    preConfirm: () => {
      return [
        document.getElementById('swal-input1').value,
        document.getElementById('swal-input2').value
      ]
    }
  })
  
  if (formValues) {
    Swal.fire(JSON.stringify(formValues))
  }
/* return(



);

 */
}
export default Paramettre;  