
import Dashboard from './pages/Dashboard';
import LoginForm from './pages/Connexion';
import { Route, Routes } from 'react-router-dom';
import Paramettre from './pages/Paramettre';
import Historiques from './pages/Historiques';
import  TableauDB  from './pages/TableauDB';
import  ParametrePlante  from './pages/ParametrePlante';
function App() {
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









