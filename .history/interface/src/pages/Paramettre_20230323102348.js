// import React from "react";
import "./Style2.css";
 import Swal from 'sweetalert2'
import { Button } from "bootstrap";


 async function Paramettre(){
return(
  <div>
     <Button>simple</Button>
    </div>
  await Swal.fire({
    title:"Paremettre d'arrosage",
    input: 'select',
    inputOptions: {
        salade: 'salade',
        tomate: 'tomate',
        autre: 'autre',
      
    },
    
     
    showCancelButton: true,
  })
   

);


}
export default Paramettre;  