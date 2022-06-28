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

const HatsPage = (props) => {
  let location = useLocation();
  console.log(location);
  let navigate = useNavigate();
  return <h1 onClick={() => navigate(-1)}>Hats Page!</h1>;
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/hats" element={<HatsPage />} />
      </Routes>
    </>
  );
}

export default App;
