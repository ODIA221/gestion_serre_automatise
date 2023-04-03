/* import Axios from "axios" */
import React from "react";
import Dashboard from './pages/Dashboard';
import LoginForm from './pages/Connexion';
import { Route, Routes } from 'react-router-dom';
import Historiques from './pages/Historiques';
import  TableauDB  from './pages/TableauDB';
import  ProtectRoute  from './pages/ProtectRoute';
import  ParametrePlante  from './pages/ParametrePlante';
import Auth from "./pages/Auth";


function App() {

  return (
  <div className='pages'>
    <>
    <Routes>
        <Route index path="/" element={<LoginForm/>} />
        <Route path='Dashboard' element={<Dashboard/>}/>
        <Route path='Historique'  element={<Historiques/>}/>
        <Route path='ParametrePlante' element={<ParametrePlante />}/>
        <Route path='TableauDB' element={<TableauDB />}/>
        <Route path='ProtectRoute' element={<ProtectRoute/>}/>
        {/* <Route path='Dashboard/TableauDB' element={""}/> */}
        {/* <Route path="*" element={<LoginForm/>} /> */}
    </Routes>
    </>
  </div>
  );
}
export default App;








