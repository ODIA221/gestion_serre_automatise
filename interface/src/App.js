import {Routes, Route, createSearchParams } from 'react-router-dom';
import LoginForm from './pages/Connexion.js';

function App() {
  return (
    <div className="pages">
      <Routes>
         <Route path="/" element={<LoginForm/>} />

      </Routes>

      {/* <LoginForm/> */}

    </div>
  );
}

export default App;



