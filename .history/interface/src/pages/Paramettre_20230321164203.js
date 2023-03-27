 import "./Style2.css";
import Swal from 'sweetalert2'

function Parametre()
return()

  const { value: plante} = await Swal.fire({
    title: 'Select field validation',
    input: 'select',
    inputOptions: {
      'plante': {
        tomate: 'tomate',
        salade: 'salade',
        grapes: 'autre',
      }
  }
     
      
      
      })()
      /* return(
        if (plante) {
          Swal.fire(`You selected:  ${plante}`)
        }
      ); */

export default Parametre; 