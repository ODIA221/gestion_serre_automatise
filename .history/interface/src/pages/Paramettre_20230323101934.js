// import React from "react";
import "./Style2.css";
 import Swal from 'sweetalert2'
import { Button } from "bootstrap";
import { FormLabel } from "react-bootstrap";

 async function Paramettre(){
return(
  await Swal.fire({
    title:"Paremettre d'arrosage",
    input: 'select',
    
    <FormLabel
    inputOptions: {
        salade: 'salade',
        tomate: 'tomate',
        autre: 'autre',

     
    },

    showCancelButton: true,
  })
   
  <div>
  <Button>simple</Button>
 </div> 
)


}
export default Paramettre;  