// import React from "react";
import "./Style2.css";
 import Swal from 'sweetalert2';

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

    title:"Paramettre d'arrosage",
    input: 'select',
    inputOptions: {
        salade: 'salade',
        tomate: 'tomate',
        autre: 'autre',        
    },

    label: 'Durée',
    input: 'select',
     
    showCancelButton: true,
    
  })
   
  


);


}
export default Paramettre;  