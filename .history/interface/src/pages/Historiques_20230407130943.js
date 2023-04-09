import React, { useState } from "react";
import "./Style2.css";
import { useEffect } from 'react'


function Historiques() {
  const [donnee, setData] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/api/recu", {
      method: "GET", headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res)
      });
  }, []);

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
            "temperature": "°C",
            "humsol": "40%",
            "humserre": "45%",
            "luminosite": "40lux"
          }
    
]  */

  return (
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
          donnee.map(h => <tr>
            <td><b>Date du {h.jour}</b></td>
            <td>{h.temperature}°C</td>
            <td>{h.humsol}%</td>
            <td>{h.humserre}%</td>
            <td>{h.luminosite}lux</td>
          </tr>)} 
      </tbody>
    </table>

<nav aria-label="...">
<ul class="pagination">
  <li class="page-item disabled">
    <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
  </li>
  <li class="page-item"><a class="page-link" href="#">1</a></li>
  <li class="page-item active" aria-current="page">
    <a class="page-link" href="#">2</a>
  </li>
  <li class="page-item"><a class="page-link" href="#">3</a></li>
  <li class="page-item">
    <a class="page-link" href="#">Next</a>
  </li>
</ul>
</nav>
  );
}


export default Historiques;
