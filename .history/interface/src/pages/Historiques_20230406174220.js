import React from "react";
import "./Style2.css";





function Historiques(){

  
 /*  const data =[
    
        {
          "jour": "lundi",
            "temperature": "21°C",
            "humsol": "40%",
            "humserre": "45%",
            "luminosite": "40lux"
          },
           {"jour": "mardi",
            "temperature": "21°C",
            "humsol": "40%",
            "humserre": "45%",
            "luminosite": "40lux"
          },
          {"jour": "mercredi",
            "temperature": "21°C",
            "humsol": "40%",
            "humserre": "45%",
            "luminosite": "40lux"
          },
          {"jour": "jeudi",
            "temperature": "21°C",
            "humsol": "40%",
            "humserre": "45%",
            "luminosite": "40lux"
          },
          {"jour": "vendredi",
            "temperature": "21°C",
            "humsol": "40%",
            "humserre": "45%",
            "luminosite": "40lux"
          },
          {"jour": "samedi",
            "temperature": "21°C",
            "humsol": "40%",
            "humserre": "45%",
            "luminosite": "40lux"
          },
          {"jour": "dimanche",
            "temperature": "21°C",
            "humsol": "40%",
            "humserre": "45%",
            "luminosite": "40lux"
          }

    
] */

  return(
    <table class="container table border border-dark mt-4">
      <thead>
        <tr>
          <th>Jours/ Données</th>
          <th>Température</th>
          <th>Humidité sol</th>
          <th>Humidité serre</th>
          <th>Luminosité</th>
        </tr>
      </thead>
      <tbody>

     {
     data.map(h => <tr>
      <td><b>{h.jour}</b></td>
      <td>{h.temperature}</td>
      <td>{h.humsol}</td>
      <td>{h.humserre}</td>
      <td>{h.luminosite}</td>
     </tr>)}
      </tbody>
    </table>
  );
}


export default Historiques;


