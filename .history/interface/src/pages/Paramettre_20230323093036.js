import React from "react";
import "./Style2.css";
 
import Swal from 'sweetalert2'

function Paramettre()

  const { value: plante} = await Swal.fire({
    title: 'Select field validation',
    input: 'select',
    inputOptions: {
      'plante': {
        tomate: 'tomate',
        salade: 'salade',
        autre: 'autre',
      }
  }
     
      
      
      })()
      return(
        if (plante) {
          Swal.fire(`You selected:  ${plante}`)
        }
      //);

      // function Paramettre(){
      //   return(
      //     <div class="modal-body">
      //     <form>
      //       <div class="mb-3">
      //         <label for="recipient-name" class="col-form-label">Recipient:</label>
      //         <input type="text" class="form-control" id="recipient-name"/>
      //       </div>
      //      </form> 
      //      </div> 
      //   );
      // }




export default Paramettre;  