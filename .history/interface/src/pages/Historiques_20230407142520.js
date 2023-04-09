/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./Style2.css";
import { useEffect } from 'react'


function Historiques() {
  const [donnee, setData] = useState([])
  const [users, setUsers] = useState(null);
  const [start, setStart] = useState<number>(0);
  const [end, setEnd] = useState<number>(7);
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState<boolean>(false);
  const [rechercher, setRecherche] = useState<String>("");
  const [cacher2, setCacher2] = useState<boolean>(true);


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
    <div className="box-pagination">
              <nav aria-label="Page navigation example">
                <ul className="pagination pagination_ ">
                  <li className="page-item ">
                    <a
                      className={`pagenav ${cacher2 ? "cacher" : ""}`}
                      href="#"
                      aria-label="Previous"
                      onClick={() => {
                        fleche();
                      }}
                    >
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className={`pagelinkupdate ${
                        active1 ? "bg-focus" : ""
                      }  `}
                      id="un"
                      href="#"
                      onClick={() => {
                        setStart(0);
                        setEnd(7);
                        setActive1(true);
                        setActive2(false);
                      }}
                    >
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className={`pagelinkupdate ${active2 ? "bg-focus" : ""} ${
                        cacher2 ? "cacher" : ""
                      }`}
                      href="#"
                      onClick={() => {
                        setStart(7);
                        setEnd(11);
                        setActive1(false);
                        setActive2(true);
                      }}
                    >
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className={`pagenav ${cacher2 ? "cacher" : ""}`}
                      href="#"
                      onClick={() => {
                        fleche();
                      }}
                      aria-label="Next"
                    >
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
