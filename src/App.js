import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import {
  Routes,
  Route,
  Link,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </>
  );
}

export default App;
