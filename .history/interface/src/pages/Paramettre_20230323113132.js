import React from "react";
import "./Style2.css";/* 
 import Swal from 'sweetalert2'; */

 async function Paramettre(){
 
return(

  /* await Swal.fire({
   title:"Paramettre d'arrosage",
    input: 'select',
    inputOptions: {
        salade: 'salade',
        tomate: 'tomate',
        autre: 'autre',        
    },
    // label: 'Durée',
    // input: 'select',
    showCancelButton: true,
  })

*/

<div class="modal-body">
<form>
  <div class="mb-3">
    <label for="recipient-name" class="col-form-label">Recipient:</label>
    <input type="text" class="form-control" id="recipient-name">
  </div>
  <div class="mb-3">
    <label for="message-text" class="col-form-label">Message:</label>
    <textarea class="form-control" id="message-text"></textarea>
  </div>
</form>
</div>
}
export default Paramettre;  