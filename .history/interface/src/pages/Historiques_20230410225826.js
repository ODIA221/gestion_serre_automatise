/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import "./Style2.css";

function Historiques() {
  const [donnee, setData] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(7);
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);
  const [rechercher, setRecherche] = useState("");
  const [cacher2, setCacher2] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/recu", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        const donneeAvecDate = res.map((item) => ({
          ...item,
          dateInsertion: Date.now(),
        }));
        setData(donneeAvecDate);
      });
  }, []);

  const handleSearch = (event) => {
    const valeur = event.target.value;
    setRecherche(valeur);
  };

  const handlePagination = (page) => {
    if (page === 1) {
      setStart(0);
      setEnd(7);
      setActive1(true);
      setActive2(false);
    } else if (page === 2) {
      setStart(7);
      setEnd(11);
      setActive1(false);
      setActive2(true);
    }
  };

  const dataFiltree = donnee.filter((item) => {
    if (rechercher === "") {
      return true;
    } else {
      const dateSelectionnee = new Date(rechercher);
      const dateItem = new Date(item.dateInsertion);
      return (
        dateSelectionnee.toDateString() === dateItem.toDateString() ||
        dateSelectionnee.toISOString() === dateItem.toISOString()
      );
    }
  });

  const dataAffichee = dataFiltree.slice(start, end);

  return (
<<<<<<< HEAD
    <div class= "container">
       <input
              onChange={(e) => search(e.target.value)}
              type="date"
              name="date"
              id="date"
             /*  max={max}
              min="2023-01-01" */
            />
    <table class=" table border border-dark mt-4">
      <thead>
        <tr>
          <th>Date</th>
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
=======
    <div className="container">
      <div className="form-group">
        <label htmlFor="date">Sélectionner une date:</label>
        <input
          onChange={handleSearch}
          type="date"
          name="date"
          id="date"
          min="2023-01-01"
        />
      </div>
      <table className="table border border-dark mt-4">
        <thead>
          <tr>
            <th>Jours</th>
            <th>Température (°C)</th>
            <th>Humidité sol (%)</th>
            <th>Pression serre (%)</th>
            <th>luminosité (lux)</th>
          </tr>
          </thead>
          <tbody>
            {dataAffichee.map((item) => (
            <tr key={item.id}>
              <td>{new Date(item.dateInsertion).toLocaleDateString()}</td>
              <td>{item.temperature}</td>
              <td>{item.humsol}</td>
              <td>{item.humserre}</td>
              <td>{item.luminosite}</td>
            </tr>
            ))}
            </tbody>
            </table>
            <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li className={`page-item ${active1 ? "active" : ""}`}>
                <a className="page-link" href="#" onClick={() => handlePagination(1)}>
                  1
                </a>
              </li>
              <li className={`page-item ${active2 ? "active" : ""}`}>
                <a className="page-link" href="#" onClick={() => handlePagination(2)}>
                  2
                </a>
              </li>
            </ul>
          </nav>
>>>>>>> f3cc68d1086f2d4ec8d0243dfd403276134648e0

      </div>
      );
      }

export default Historiques;


