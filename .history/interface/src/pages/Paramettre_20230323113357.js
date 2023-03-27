import React from "react";
import "./Style2.css";
/* 
 import Swal from 'sweetalert2'; */

function Paramettre(){
 
return(

<div class="modal-body">
<form>
  <div class="mb-3">
    <label for="recipient-name" class="col-form-label">Recipient:</label>
    <input type="text" class="form-control" id="recipient-name">
  </div>
  
</form>
</div>
); 
}
export default Paramettre;  

/* await Swal.fire({
   title:"Paramettre d'arrosage",
    input: 'select',
    inputOptions: {
        salade: 'salade',
        tomate: 'tomate',
        autre: 'autre',        
    },
    
    showCancelButton: true,
  })

*/