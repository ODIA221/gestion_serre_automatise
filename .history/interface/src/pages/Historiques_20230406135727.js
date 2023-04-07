import React, { useState } from "react";
import "./Style2.css";
import {useEffect } from 'react'


function Historiques(){
 const [data,setData] = useState<> ('')

  useEffect(() => {
    fetch("http://localhost:5000/api/recu", { method: "GET",headers: {
      "Content-Type": "application/json",
       Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    }, })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData (data)
      });
    },[]);

  const data =[

    
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

    
]

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


