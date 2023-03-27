import "./Style2.css";
import Swal from 'sweetalert2'


  const { Parametre: fruit } = await Swal.fire({
    title: 'Select field validation',
    input: 'select',
    inputOptions: {
      'Fruits': {
        apples: 'tomate',
        bananas: 'salade',
        grapes: 'autre',
      }
    showCancelButton: true,
    inputValidator: (value) => {
      return new Promise((resolve) => {
        if (value === 'oranges') {
          resolve()
        } else {
          resolve('You need to select oranges :)')
        }
      })
      if (fruit) {
        Swal.fire(`You selected: ${fruit}`)
      }
      
      })()

export default Parametre;