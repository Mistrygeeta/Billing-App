import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import Products from './pages/Products';
import Customers from './pages/Customers';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/products' element={<Products/>}/>
    <Route path='/customers' element={<Customers/>}/>
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<Signup />} />
    <Route path='/dashboard' element ={<Dashboard />} />
   </Routes>
   </BrowserRouter>
  )
}

export default App;
