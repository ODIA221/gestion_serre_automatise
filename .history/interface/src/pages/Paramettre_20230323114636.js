// import React from "react";
import "./Style2.css";
import Swal from 'sweetalert2';

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
    
  }) */
   
  
const { value: formValues } = await Swal.fire({
  title: 'Multiple inputs',
  html:
    '<input id="swal-input1" class="swal2-input">' +
    '<input id="swal-input2" class="swal2-input">',
  focusConfirm: false,
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

);


}
export default Paramettre;  