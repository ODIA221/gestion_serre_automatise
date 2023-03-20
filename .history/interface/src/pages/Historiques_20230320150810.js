import React from "react";
import "./Style2.css";

function Historiques(){
  const data =[
    
        {
          "jour": "lundi",
            "temperature": "21°C",
            "humsol": "40%",
            "humserre": "45%",
            "luminosite": "40lux"
          },
          "mardi": {
            "temperature": "21°C",
            "humsol": "40%",
            "humserre": "45%",
            "luminosite": "40lux"
          },
          "mercredi": {
            "temperature": "21°C",
            "humsol": "40%",
            "humserre": "45%",
            "luminosite": "40lux"
          },
          "jeudi": {
            "temperature": "21°C",
            "humsol": "40%",
            "humserre": "45%",
            "luminosite": "40lux"
          },
          "vendredi": {
            "temperature": "21°C",
            "humsol": "40%",
            "humserre": "45%",
            "luminosite": "40lux"
          },
          "samedi": {
            "temperature": "21°C",
            "humsol": "40%",
            "humserre": "45%",
            "luminosite": "40lux"
          },
          "dimanche": {
            "temperature": "21°C",
            "humsol": "40%",
            "humserre": "45%",
            "luminosite": "40lux"
          }

    
]
const map1=data.map(x=>x+1);
console.log(map1);
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
     data.map(h =)/*  
        <tr>
          <td>mardi</td>
          <td>20°C</td>
          <td>20%</td>
          <td>20%</td>
          <td>20lux</td>
        </tr>
        <tr>
          <td>mercredi</td>
          <td>20°C</td>
          <td>20%</td>
          <td>20%</td>
          <td>20lux</td>
        </tr>
        <tr>
          <td>jeudi</td>
          <td>40°C</td>
          <td>40%</td>
          <td>40%</td>
          <td>50lux</td>
        </tr>
        <tr>
          <td>vendredi</td>
          <td>50°C</td>
          <td>50%</td>
          <td>50%</td>
          <td>29lux</td>
        </tr>
        <tr>
          <td>samedi</td>
          <td>20°C</td>
          <td>20%</td>
          <td>20%</td>
          <td>20lux</td>
        </tr>
        <tr>
          <td>Dimanche</td>
          <td>20°C</td>
          <td>20%</td>
          <td>20%</td>
          <td>20lux</td>
        </tr> */}
      </tbody>
    </table>
  );
}


export default Historiques;


