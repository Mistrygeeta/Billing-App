import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import Products from './pages/Products';
import Customers from './pages/Customers';
import Bills from './pages/Bills';
import Navbar from './components/Navbar/Navbar';
import CreateBill from './pages/CreateBill';
import ViewBill from './pages/ViewBill';
import InvoicePrint from './pages/InvoicePrint';
import Reports from './pages/Reports';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/view-bill/:id' element={<ViewBill/>}/>
    <Route path='/create-bill' element={<CreateBill/>}/>
    <Route path='/print-bill/:id' element={<InvoicePrint/>}/>
    <Route path='/navbar' element={<Navbar/>} />
    <Route path='/products' element={<Products/>}/>
    <Route path='/customers' element={<Customers/>}/>
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<Signup />} />
    <Route path='/dashboard' element ={<Dashboard />} />
    <Route path='/bills' element = {<Bills/>}/> 
    <Route path='/reports' element={<Reports/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App;
