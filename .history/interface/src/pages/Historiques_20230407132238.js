/* eslint-disable jsx-a11y/anchor-is-valid */
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
        setUsers(
          res.filter((_a: any, index: number) => {
            if (rechercher == "") {
              return index >= start && index < end;
            } else {
              if (rechercher != _a.date) {
                console.log("rien");

              }

            if (rechercher == _a.date) {
              console.log("trouver");
              setCacher2(true); //mis à jour to be merged MHDLamine->DEV 
              return _a.date == rechercher;
            }
          }
          })
        );
  const fleche = () => {
    if (active1 == true) {
      setActive1(false);
      setActive2(true);
      setStart(7);
      setEnd(14);
    }
    if (active2 == true) {
      setActive1(true);
      setActive2(false);
      setStart(0);
      setEnd(7);
    }
  };


      });

  }, []);

  return (
    <div class= "container">
    <table class=" table border border-dark mt-4">
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
  <div>
  <nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
  </div>

</div>
  );
}


export default Historiques;
