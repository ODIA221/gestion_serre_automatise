import React from "react";
function Historiques(){
  return(
    <table class="container table">
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
          <td>20</td>
          <td>20</td>
          <td>20</td>
          <td>20</td>
        </tr>
        <tr>
          <td>mercredi</td>
          <td>20</td>
          <td>20</td>
          <td>20</td>
          <td>20</td>
        </tr>
        <tr>
          <td>jeudi</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>vendredi</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>samedi</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>Dimanche</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </table>
  );
}


export default Historiques;


