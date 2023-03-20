import {Routes, Route, createSearchParams } from 'react-router-dom';
import LoginForm from './pages/Connexion.js';
import Paramettre from './pages/Paramettre.js';
import Dashboard from './pages/Dashboard';
import Historiques from './pages/Historiques'

function App() {
  return (
    <div className="pages">
      <Routes>
         <Route path="/" element={<LoginForm/>} />
         <Route path="/param" element={<Paramettre/>} />
         <Route path="/historique" element={<Historiques/>} />
         <Route path="/dashbord" element={<Dashboard/>} />

      </Routes>

      {/* <LoginForm/> */}

    </div>
  );
}

export default App;



