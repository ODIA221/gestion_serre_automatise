/* import Axios from "axios" */
import React from "react";
import Dashboard from './pages/Dashboard';
import LoginForm from './pages/Connexion';
import { Route, Routes } from 'react-router-dom';
import Historiques from './pages/Historiques';
import  TableauDB  from './pages/TableauDB';
import  ParametrePlante  from './pages/ParametrePlante';
/* import Auth from "./pages/Auth"; */



function App() {

   





  return (
  <div className='pages'>
    <>
    <Routes>
        <Route index path="/" element={<LoginForm/>} />
        <Route path='/Dashboard' element={<Dashboard/>}>
            <Route path='Historique'  element={<Historiques/>}/>
<<<<<<< HEAD
            <Route path='ParametrePlante' element={<ParametrePlante />}/>
            <Route path='TableauDB' element={<TableauDB />}/>
            {/* <Route path='ChangePW' element='ChangePW'/> */}

        </Route>
        <Route  path='/*'> Page introuvable</Route>
=======
            <Route PrivateRoute exact path='ParametrePlante' element={<ParametrePlante />}/>
            <Route path='TableauDB' element={<TableauDB />}/>


        </Route>
        <Route  path='*'> Page introuvable</Route>
>>>>>>> 220ada23c0a67156fd66de32236e37a037f82587
    </Routes>
    </>
  </div>
  );
}
export default App;








