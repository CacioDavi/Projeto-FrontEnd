import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import Cart from './pages/Cart/Cart.jsx' 
import Categories from './pages/Categories/Categories.jsx'
import Orders from './pages/Orders/Orders.jsx'
import Products from './pages/Products/Products.jsx'
import Register from './pages/Register/Register.jsx'
import ProductListingPage from './pages/ProductListingPage.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produtos" element={<ProductListingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  )
}

export default App
