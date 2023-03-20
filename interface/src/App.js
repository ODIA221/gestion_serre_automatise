import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Historique from './pages/Historique';
import { createBrowserRouter, createRoutesFromElements, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <>

    <Routes>
        <Route index path='Connexion'></Route>
        <Route path='/Dashboard' element={<Dashboard/>}>
            <Route path='Historique'  element={<Historique/>}/>
            <Route path='Paramettre_plante' element='Paramettre_plante'/>
            <Route path='Historique_serre' element='Historique_serre'/>
            <Route path='Historique_plante' element='Historique_plante'/>
            <Route path='ChangePW' element='ChangePW'/>
        </Route>
        <Route  path='/*'> Page introuvable</Route>
    </Routes>
  </>
  );
}

export default App;



// import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
// const Router = createBrowserRouter(
//   createRoutesFromElements(
//         <Router path='/' element={<App />}>
          
//       <Route path='/Dashbord' element='Dashbord'>
//         <Route path='Historique' element='Historique'/>
//         <Route path='Paramettre-plante' element='Paramettre-plante'/>
//         <Route path='Historique-serre' element='Historique-serre'/>
//         <Route path='Historique-plantes' element='Historique-plantes'/>
//       </Route>
//       <Route index path='Connexion'></Route>
//       <Route  path='*'> Page introuvable</Route>

//         </Router>
//   )
// )







