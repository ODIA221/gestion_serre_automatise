import "./Style2.css";
import Swal from 'sweetalert2'


function Parametre(){
  const { Parametre: fruit } = await Swal.fire({
    title: 'Select field validation',
    input: 'select',
    inputOptions: {
      'Fruits': {
        apples: 'Apples',
        bananas: 'Bananas',
        grapes: 'Grapes',
        oranges: 'Oranges'
      },
      'Vegetables': {
        potato: 'Potato',
        broccoli: 'Broccoli',
        carrot: 'Carrot'
      },
      'icecream': 'Ice cream'
    },
    inputPlaceholder: 'Select a fruit',
    showCancelButton: true,
    inputValidator: (value) => {
      return new Promise((resolve) => {
        if (value === 'oranges') {
          resolve()
        } else {
          resolve('You need to select oranges :)')
        }
      })
    });
  
  return(
    if (fruit) {
      Swal.fire(`You selected: ${fruit}`)
    }
  );
 

}

export default Parametre;