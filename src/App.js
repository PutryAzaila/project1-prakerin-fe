// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './PagesUser/login';
import Register from './PagesUser/register';
import Dashboard from './PagesUser/dashboard';
import User from './PagesUser/user';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} exact></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>  
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/user" element={<User/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
