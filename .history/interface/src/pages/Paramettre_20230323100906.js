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
        apples: 'Apples',
        bananas: 'Bananas',
        grapes: 'Grapes',
        oranges: 'Oranges'
      },
      showCancelButton: true,
    },
    inputPlaceholder: 'Select a plante',
 
  })
)
}
export default Paramettre;  