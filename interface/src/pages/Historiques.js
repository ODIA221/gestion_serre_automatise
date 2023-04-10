/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import "./Style2.css";

function Historiques() {
  const [donnee, setData] = useState([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(7);

  const [rechercher, setRecherche] = useState("");
  const [cacher2, setCacher2] = useState(true);

/*   const [items, setItems] = useState(["..."]);
  const [activePage, setActivePage] = useState(1);
 */

  const items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 5, name: "Item 5" },
    { id: 6, name: "Item 6" },
    { id: 7, name: "Item 7" },
    { id: 8, name: "Item 8" },
    { id: 9, name: "Item 9" },
    { id: 10, name: "Item 10" },
    { id: 11, name: "Item 11" },
    { id: 12, name: "Item 12" },
    { id: 13, name: "Item 13" },
    { id: 14, name: "Item 14" },
    { id: 15, name: "Item 15" },
    { id: 16, name: "Item 16" },
    { id: 17, name: "Item 17" },
    { id: 18, name: "Item 18" },
    { id: 19, name: "Item 19" },
    { id: 20, name: "Item 20" }
  ];
  
  const Pagination = () => {
    const [displayedItems, setDisplayedItems] = useState([]);
    const [activePage, setActivePage] = useState(1);
    const [active1, setActive1] = useState(true);
    const [active2, setActive2] = useState(false);
  
    const pageSize = 7;
  
    const handlePagination = (page) => {
      // nombre d'éléments par page
      const startIndex = (page - 1) * pageSize;
      const endIndex = Math.min(startIndex + pageSize, items.length);
      // si la fin de la page dépasse la fin du tableau, ajuster la fin
      const remaining = items.length - endIndex;
      if (remaining > 0) {
        // il y a des éléments restants
        console.log(`Affichage de ${pageSize} éléments de la page ${page}`);
        const newPageItems = items.slice(startIndex, endIndex);
        setDisplayedItems(newPageItems);
        setActivePage(page);
        setActive1(true);
        setActive2(false);
      } else {
        // pas d'éléments restants
        console.log(`Affichage de ${pageSize} éléments de la page ${page}`);
        const newPageItems = items.slice(startIndex, endIndex);
        setDisplayedItems(newPageItems);
        setActivePage(page);
        setActive1(false);
        setActive2(true);
      }
    }
  };
  
  const handlePrevClick = () => {
    if (activePage > 1) {
      handlePagination(activePage - 1);
    }
  };

  const handleNextClick = () => {
    if (activePage < items.length / pageSize) {
      handlePagination(activePage + 1);
    }
  };

  const paginationItems = [];
  for (let i = 1; i <= Math.ceil(items.length / pageSize); i++) {
    paginationItems.push(
      <button
        key={i}
        onClick={() => handlePagination(i)}
        className={`pagination-item ${activePage === i ? "active" : ""}`}
      >
        {i}
      </button>
    );
  }

    


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

/*   const handlePagination = (page) => {
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
  }; */

/*   const handlePagination = (page) => {
    const pageSize = 7; // nombre d'éléments par page
    const startIndex = (page - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, items.length);
    // si la fin de la page dépasse la fin du tableau, ajuster la fin
    const remaining = items.length - endIndex;
    if (remaining > 0) {
      // il y a des éléments restants
      console.log(`Affichage de ${pageSize} éléments de la page ${page}`);
      for (let i = startIndex; i < endIndex; i++) {
        console.log(items[i]);
      }
      console.log(`Il reste ${remaining} éléments`);
      setActive1(true);
      setActive2(false);
    } else {
      // pas d'éléments restants
      console.log(`Affichage de ${pageSize} éléments de la page ${page}`);
      for (let i = startIndex; i < endIndex; i++) {
        console.log(items[i]);
      }
      setActive1(false);
      setActive2(true);
    }
  }; */

/*   const pageSize = 7; */

/*   const handlePagination = (page) => {
     // nombre d'éléments par page
    const startIndex = (page - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, items.length);
    // si la fin de la page dépasse la fin du tableau, ajuster la fin
    const remaining = items.length - endIndex;
    if (remaining > 0) {
      // il y a des éléments restants
      console.log(`Affichage de ${pageSize} éléments de la page ${page}`);
      const newPageItems = items.slice(startIndex, endIndex);
      setDisplayedItems(newPageItems);
      setActivePage(page);
      setActive1(true);
      setActive2(false);
    } else {
      // pas d'éléments restants
      console.log(`Affichage de ${pageSize} éléments de la page ${page}`);
      const newPageItems = items.slice(startIndex, endIndex);
      setDisplayedItems(newPageItems);
      setActivePage(page);
      setActive1(false);
      setActive2(true);
    }
  }; */
  
  
  

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
            <th>Date Ajout</th>
            <th>Température</th>
            <th>Humidité sol</th>
            <th>Humidité serre</th>
            <th>Luminosité</th>
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
                  

              </ul>
              
            </nav>

            </div>
            );
              
            }

export default Historiques;






