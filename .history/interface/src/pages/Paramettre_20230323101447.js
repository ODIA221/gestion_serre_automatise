// import React from "react";
import "./Style2.css";
 import Swal from 'sweetalert2'

 async function Paramettre(){
return(
  await Swal.fire({
    title:"Paremettre d'arrosage",
    input: 'select',
    inputOptions: {
        salade: 'salade',
        tomate: 'tomate',
        autre: 'autre',
      showCancelButton: f,
    },
   
 
    inputValidator: (value) => {
      return new Promise((resolve) => {
        if (value === 'oranges') {
          resolve()
        } 
      })
    }
  })
)
}
export default Paramettre;  