import './App.css';
import Dashboard from './pages/Dashboard';
import { createBrowserRouter, createRoutesFromElements, Link, Route, Routes } from 'react-router-dom';
import Historiques from './pages/Historiques';

function App() {
  return (
  <>

    <Routes>
        <Route index path='Connexion'></Route>
        <Route path='/Dashboard' element={<Dashboard/>}>
            <Route path='Historique'  element={<Historiques/>}/>
            <Route path='Paramettre_plante' element='Paramettre_plante'/>
            <Route path='ChangePW' element='ChangePW'/>
        </Route>
        <Route  path='/*'> Page introuvable</Route>
    </Routes>
  </>
  );
}

export default App;









