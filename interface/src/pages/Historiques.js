import React, { useState } from "react";
import "./Style2.css";
import { useEffect } from 'react'


function Historiques() {
  const [donnee, setData] = useState([])
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(7);
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);
  const [rechercher, setRecherche] = useState("");
  const [cacher2, setCacher2] = useState(true);


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
        console.log(res);        setData(
          res.filter((_a, index) => {
            if (rechercher === "") {
              return index >= start && index < end;
            } else {
              if (rechercher != _a.date) {
                console.log("rien");

              }

            if (rechercher === _a.date) {
              console.log("trouver");
              setCacher2(true); 
              return _a.date === rechercher;
            }
          }
          return false;
          }
          )
        );



      });

  }, [start, end, rechercher, cacher2]);
  const fleche = () => {
    if (active1 === true) {
      setActive1(false);
      setActive2(true);
      setStart(7);
      setEnd(14);
    }
    if (active2 === true) {
      setActive1(true);
      setActive2(false);
      setStart(0);
      setEnd(7);
    }
  };
  const search = (chercher) => {
    const valeur = chercher;
    setRecherche(valeur);
  };
  return (
    <div class= "container">
       <input
              onChange={(e) => search(e.target.value)}
              type="date"
              name="date"
              id="date"
            />
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
      <td><b>{h.jour}</b></td>
      <td>{h.temperature}</td>
      <td>{h.humsol}</td>
      <td>{h.humserre}</td>
      <td>{h.luminosite}</td>
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
                      onClick={() => fleche()}
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
