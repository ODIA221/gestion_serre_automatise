import React from 'react'
import porteO from '../images/porteO.png'
import porteF from '../images/porteF.png'
const TableauDB = () => {
  let x
  let porte = "ferme"
  if ( porte === "ouvert") {
    x=porteO;

  } else if ( porte === "ferme") {
    x=porteF;

  }
  return (
    <div>
      <div>
        <h2>Etats</h2>
        <div>
          <div>
            <h3>Porte</h3>
            <img src={x} id="ImageVTR" alt="" />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default TableauDB