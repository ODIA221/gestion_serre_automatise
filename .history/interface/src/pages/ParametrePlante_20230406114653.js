import React from 'react'

const ParametrePlante = () => {
  return (
    <div class='historiquePlante2'>
       <div class='paraPlante'> 
        <div class='paraNom'><h2>Tomate</h2> </div>
       
        <div class='groupChampPara'>
        <div class='champPara'>
          <h4><b>Première heure :</b></h4>
          <h5>{localStorage}</h5>
        </div>
        <div class='champPara'>
          <h4><b>Durée :</b></h4>
          <h5>10mns</h5>
        </div>
        <div class='champPara'>
          <h4><b>Deuxième heure :</b></h4>
          <h5>16H</h5>
        </div>
        <div class='champPara'>
          <h4><b>Durée :</b></h4>
          <h5>15mns</h5>
        </div>
        </div>
      </div>
      <div class='paraPlante'> 
        <div class='paraNom'><h2>Salade</h2> </div>
       
        <div class='groupChampPara'>
        <div class='champPara'>
          <h4><b>Première heure :</b></h4>
          <h5>8H</h5>
        </div>
        <div class='champPara'>
          <h4><b>Durée :</b></h4>
          <h5>5mns</h5>
        </div>
        <div class='champPara'>
          <h4><b>Deuxième heure :</b></h4>
          <h5>17H</h5>
        </div>
        <div class='champPara'>
          <h4><b>Durée :</b></h4>
          <h5>5mns</h5>
        </div>
        </div>
      </div>
    </div>

    
  )
}

export default ParametrePlante