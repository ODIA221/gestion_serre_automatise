// import React from "react";
import "./Style2.css";
 import Swal from 'sweetalert2'
 async function Paramettre(){
 
return(

  await Swal.fire({
    title:"Paramettre d'arrosage",
    input: 'select',
    inputOptions: {
        salade: 'salade',
        tomate: 'tomate',
        autre: 'autre',        
    },

    
     
    showCancelButton: true,
    
  }),
  <div class="modal-body">
  <form>
    <div class="mb-3">
      label:
     input: 'select',
    </div>
  </form>
</div>

);


}
export default Paramettre;  