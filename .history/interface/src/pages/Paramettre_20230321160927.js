 import "./Style2.css";
import Swal from 'sweetalert2'

function Parametre()

  const P { value: plante} = await Swal.fire({
    title: 'Select field validation',
    input: 'select',
    inputOptions: {
      'plante': {
        apples: 'tomate',
        bananas: 'salade',
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