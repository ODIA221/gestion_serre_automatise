// import React from "react";
import "./Style2.css";
 import Swal from 'sweetalert2';

 async function Paramettre(){
 
return(

  await Swal.fire({
    title:"Paramettre d'arrosage" "Durée",
    input: 'select',
    inputOptions: {
        salade: 'salade',
        tomate: 'tomate',
        autre: 'autre',        
    },

    title1:"Durée",
    input1: 'select',
    inputOptions1: {
        salade: 'salade',
        tomate: 'tomate',
        autre: 'autre',        
    },

    // label: 'Durée',
    // input: 'select',
     
    showCancelButton: true,
    
  })
   
  


);


}
export default Paramettre;  