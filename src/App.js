import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { createBrowserRouter ,RouterProvider } from 'react-router-dom';
import Login from './components/Login/Login.js';
import Intro from './components/Intro.js';
import { LoginProvider } from './components/Login/LoginContext.js';

function App() {
  
          {/* Login route */}
          <Route path="/login" element={<Login />} />
          
          {/* CalculatorPage */}
          <Route path="/calculator" element={<Intro />} />

export default App;
