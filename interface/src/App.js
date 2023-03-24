import './App.css';
import Dashboard from './pages/Dashboard';
import LoginForm from './pages/Connexion';
import { Route, Routes } from 'react-router-dom';
import Historiques from './pages/Historiques';
import  TableauDB  from './pages/TableauDB';
import  Parametre_plante  from './pages/Parametre_plante';
function App() {
  return (
  <div className='pages'>

    <Routes>
        <Route index path="/" element={<LoginForm/>} />
        <Route path='/Dashboard' element={<Dashboard/>}>
            <Route path='Historique'  element={<Historiques/>}/>
            <Route path='Parametre_plante' element={<Parametre_plante />}/>
            <Route path='TableauDB' element={<TableauDB />}/>
            <Route path='ChangePW' element='ChangePW'/>
        </Route>
        <Route  path='/*'> Page introuvable</Route>
    </Routes>
  </div>
  );
}

export default App;









