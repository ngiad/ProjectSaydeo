import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import { AuthContext } from './contexts/AuthContext';
import Admin from './layout/Admin/Admin';
import Front from './layout/Front/Front';
import About from './pages/About';
import AdminHomePage from './pages/AdminHomePage';
import AdminNews from './pages/AdminNews';
import AdminProducts from './pages/AdminProducts';
import Contact from './pages/Contact';
import Guide from './pages/Guide';
import Home from './pages/Home';
import LoginAdmin from './pages/LoginAdmin';
import News from './pages/News';
import NotFound from './pages/NotFound';
import Product from './pages/Product';
import Products from './pages/Products';
import Search from './pages/Search';

function App() {
  const { LoginSuccect } = useContext(AuthContext)

  console.log(LoginSuccect)
  return (
        <Routes>
          <Route path='/' element={<Front />}>
            <Route index element={<Home />} />
            <Route index path="about" element={<About />} />
            <Route index path="products" element={<Products />} />
            <Route index path="guide" element={<Guide />} />
            <Route index path="news" element={<News />} />
            <Route index path="contact" element={<Contact />} />
            <Route index path="search/:title" element={<Search />} />
            <Route index path="products/:id" element={<Product />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route index path="login" element={<LoginAdmin />} />
          {
            LoginSuccect &&
            <Route path='/admin' element={<Admin />}>
              <Route index element={<AdminHomePage />} />
              <Route index path='/admin/products' element={<AdminProducts />} />
              <Route index path='/admin/News' element={<AdminNews />} />
            </Route>
          }
      </Routes>
  );
}

export default App;
