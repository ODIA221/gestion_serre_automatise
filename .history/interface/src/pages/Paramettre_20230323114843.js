// import React from "react";
import "./Style2.css";
import Swal from 'sweetalert2';

 async function Paramettre(){
  const { value: formValues } = await Swal.fire({
    title: 'Multiple inputs',
    html:
      `<select id="swal-input1" class="swal2-input">
      <o
      </select>` +
      '<input id="swal-input2" class="swal2-input">',
    focusConfirm: false,
    preConfirm: () => {
      return [
        document.getElementById('swal-input1').value,
        document.getElementById('swal-input2').value
      ]
    }
  })
  
  if (formValues) {
    Swal.fire(JSON.stringify(formValues))
  }
/* return(



);

 */
}
export default Paramettre;  