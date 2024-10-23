import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './App1'; // Tu componente de inicio de sesión
import Dashboard from './Dashboard'; // Tu componente de dashboard

function HomePrincipal() {
  return (
    <Router>
      <Routes>
        <Route path="/App1" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default HomePrincipal;