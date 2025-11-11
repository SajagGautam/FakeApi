
import { BrowserRouter, Route, } from 'react-router'
import './App.css'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import UserList from './pages/UserList'
import { Routes } from 'react-router'
import Navbar from './components/NavBar'
import LoginUser from './pages/LoginUser'

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<LoginUser />} />
       <Route path="/users" element={<UserList />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
