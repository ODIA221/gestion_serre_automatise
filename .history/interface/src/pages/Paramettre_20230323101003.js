// import React from "react";
import "./Style2.css";
 import Swal from 'sweetalert2'

 async function Paramettre(){
return(
  await Swal.fire({
    title: 'Select field validation',
    input: 'select',
    inputOptions: {
      'plantes': {
        salade: 'Apples',
        tomate: 'Bananas',
        autre: 'autre',
        oranges: 'Oranges'
      },
      showCancelButton: true,
    },
    inputPlaceholder: 'Select a plante',
 
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