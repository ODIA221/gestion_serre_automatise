import React from 'react'
import {Link, Outlet  } from "react-router-dom";
import Header from '../components/Header';
import "./Style2.css";
import Swal from 'sweetalert2'
const Dashboard = () => {
  return (
    <>
    <Header/>
    <div id='container'>
    <Outlet></Outlet>
    </div>

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
     'Vegetables': {
       potato: 'Potato',
       broccoli: 'Broccoli',
       carrot: 'Carrot'
     },
     'icecream': 'Ice cream'
   },
   inputPlaceholder: 'Select a plante',
   showCancelButton: true,
   inputValidator: (value) => {
     return new Promise((resolve) => {
       if (value === 'oranges') {
         resolve()
       } else {
         resolve('You need to select oranges :)')
       }
     })
   }
 })
)
}
export default Paramettre;  
    </div>
    </>
  )
}

export default Dashboard