import React from 'react';
import './assets/normalize.css';
import './assets/flexboxgrid.css';
import './App.scss';
import {
  BrowserRouter as Router, Route, Routes, Navigate,
} from 'react-router-dom';
import Header from './components/Header/Header';
import Page404 from './Pages/404/Page404';
import HomePage from './Pages/Home/HomePage';
import CartPage from './Pages/Cart/CartPage';

const App = () => (
  <section className="App">
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/cart"
          element={<CartPage />}
        />
        <Route
          path="404"
          element={<Page404 />}
        />
        <Route
          path="*"
          element={<Navigate to="/404" />}
        />
      </Routes>
    </Router>
  </section>
);

export default App;
