import React from "react";
i
function Historiques(){
  return(
    <table class="container table border border-dark">
      <thead>
        <tr>
          <th>Jours/Données</th>
          <th>Température</th>
          <th>Humidité sol</th>
          <th>Humidité serre</th>
          <th>Luminosité</th>
        </tr>
      </thead>
      <tbody>
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
        </tr>
      </tbody>
    </table>
  );
}


export default Historiques;


