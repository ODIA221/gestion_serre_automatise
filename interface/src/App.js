import {Routes, Route, createSearchParams } from 'react-router-dom';
import LoginForm from './pages/Connexion.js';
import Paramettre from './pages/Paramettre.js';

function App() {
  return (
    <div className="pages">
      <Routes>
         <Route path="/" element={<LoginForm/>} />
         <Route path="/param" element={<Paramettre/>} />

      </Routes>

      {/* <LoginForm/> */}

    </div>
  );
}

export default App;



