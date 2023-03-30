/* import Axios from "axios" */
import React/* , {useState, useEffect} */ from "react";
import Dashboard from './pages/Dashboard';
import LoginForm from './pages/Connexion';
import { Route, Routes } from 'react-router-dom';
import Paramettre from './pages/Paramettre';
import Historiques from './pages/Historiques';
import  TableauDB  from './pages/TableauDB';
import  ParametrePlante  from './pages/ParametrePlante';
/* import { useState } from "react"; */
function App() {

      /* Connexion du front et le bacck */
 /*  const [data, setData] = useState("");
  console.log(data);

  const getaData = async() => {
    const response = await Axios.post("http:localhost:2000/api/connexion");
    setData (response.data)
    
  }

  useEffect(() => {
    getaData()
    console.log(getaData())
  },[]); */
  /* fin */







  return (
  <div className='pages'>
    <Routes>

        <Route index path="/" element={<LoginForm/>} />
        <Route path='/Dashboard' element={<Dashboard/>}>
            <Route path='Historique'  element={<Historiques/>}/>
            <Route path='ParametrePlante' element={<ParametrePlante />}/>
            <Route path='TableauDB' element={<TableauDB />}/>
            <Route path='ChangePW' element='ChangePW'/>
            <Route path='Paramettre' element={<Paramettre />} />

        </Route>
        <Route  path='/*'> Page introuvable</Route>
    </Routes>
  </div>
  );
}

export default App;









