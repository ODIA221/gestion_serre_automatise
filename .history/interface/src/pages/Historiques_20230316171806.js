import React from "react";
import "./Style2.css";

function Historiques(){
  const data=[
    {
        "lundi": {
            "temperature": "21",
            "humsol": "40",
            "humserre": "45",
            "luminosite": "40"
          },
          "mardi": {
            "temperature": "21",
            "humsol": "40",
            "humserre": "45",
            "luminosite": "40"
          },
          "mercredi": {
            "temperature": "21",
            "humsol": "40",
            "humserre": "45",
            "luminosite": "40"
          },
          "jeudi": {
            "temperature": "21",
            "humsol": "40",
            "humserre": "45",
            "luminosite": "40"
          },
          "vendredi": {
            "temperature": "21",
            "humsol": "40",
            "humserre": "45",
            "luminosite": "40"
          },
          "samedi": {
            "temperature": "21",
            "humsol": "40",
            "humserre": "45",
            "luminosite": "40"
          },
          "dimanche": {
            "temperature": "21",
            "humsol": "40",
            "humserre": "45",
            "luminosite": "40"
          }

    }
]
  return(
    <table class="container table border border-dark mt-5">
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
      const links = (this.props.link);
{links.map((item, i) => (
 <li key={i}>
   <Link to={item.link}>{item.name}</Link>
 </li>
 ))}
     {/*  
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


