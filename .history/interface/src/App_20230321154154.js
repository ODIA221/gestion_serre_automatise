import './App.css';
import Dashboard from './pages/Dashboard';
import LoginForm from './pages/Connexion';
import "./pages/Paramettre.js"
import {Route, Routes } from 'react-router-dom';
import Historiques from './pages/Historiques';

function App() {
  return (
  <div className='pages'>

    <Routes>
        <Route index path="/" element={<LoginForm/>} />
        <Route path='/Dashboard' element={<Dashboard/>}>
            <Route path='Historique'  element={<Historiques/>}/>
            <Route path='Paramettre' element={Paramettre/>{}
            <Route path='ChangePW' element='ChangePW'/>
        </Route>
        <Route  path='/*'> Page introuvable</Route>
    </Routes>
  </div>
  );
}

export default App;









