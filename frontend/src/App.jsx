import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element ={<Navbar/>} />
    <Route path='/login' element={<Login />} />
    <Route path='/dashboard' element ={<Dashboard />} />
   </Routes>
   </BrowserRouter>
  )
}

export default App;
