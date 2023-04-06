import React from 'react'

const ParametrePlante = () => {
  return (
    <div class='historiquePlante2'>
       <div class='paraPlante'> 
        <div class='paraNom'><h2>{localStorage.getItem ("choix")}
</h2> </div>
       
        <div class='groupChampPara'>
        <div class='champPara'>
          <h4><b>Première heure :</b></h4>
          <h5>{localStorage.getItem ("Heure1")}</h5>
        </div>
        <div class='champPara'>
          <h4><b>Durée :</b></h4>
          <h5>{localStorage.getItem ("Heure2")}</h5>
        </div>
        <div class='champPara'>
          <h4><b>Deuxième heure :</b></h4>
          <h5>{localStorage.getItem ("Heu")}</h5>
        </div>
        <div class='champPara'>
          <h4><b>Durée :</b></h4>
          <h5>{localStorage.getItem ("Heure1")}</h5>
        </div>
        </div>
      </div>
    {/*   <div class='paraPlante'> 
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
        </div> */}
      </div>
    </div>

    
  )
}

export default ParametrePlante