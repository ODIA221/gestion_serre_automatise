import './App.css';
import LoginForm from './pages/Connexion.js';
import Dashboard from './pages/Dashboard';
import { createBrowserRouter, createRoutesFromElements, Link, Route, Routes, createSearchParams } from 'react-router-dom';
import Historiques from './pages/Historiques';

function App() {
  return (
  <>
  <div className='pages'>    
    <Routes >
            <Route path="/" element={<LoginForm/>} />
            <Route path='/Dashboard' element={<Dashboard/>}>
            <Route path='Historique'  element={<Historiques/>}/>
            <Route path='Paramettre_plante' element='Paramettre_plante'/>
            <Route path='ChangePW' element='ChangePW'/>
        </Route>
        <Route  path='/*'> Page introuvable</Route>
    </Routes>
  </div>

  </>
  );
}

export default App;









