
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import Cart from './pages/Cart/Cart.jsx'
import Categories from './pages/Categories/Categories.jsx'
import Orders from './pages/Orders/Orders.jsx'
import Products from './pages/Products/Products.jsx'
import Register from './pages/Register/Register.jsx'

import ProductListingPage from './pages/ProductListingPage.jsx'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import ProductDetails from './pages/ProductDetails/ProductDetails.jsx'

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/products" element={<Products />} />
      <Route path='/products/*' element={<ProductDetails/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
