import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Contact from './pages/Contact';
import Login from './pages/Login';
import NewProduct from './pages/NewProduct';
import Signup from './pages/Signup';
import TermsAndConditions from './pages/TermsAndConditions';
import AdminDashboard from './pages/AdminDashboard';
import UserDashboard from './pages/UserDashboard';
import About from './pages/About';
import { store } from './redux/index';
import { Provider } from 'react-redux';
import Cart from './pages/Cart';
import PlaceOrder from './pages/PlaceOrder';
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import FAQ from './pages/FAQ';
import Chat from './pages/Chat';
import PrivacyPolicy from './pages/PrivacyPolicy';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='product/:filterby' element={<Product />} />
      <Route path='contact' element={<Contact />} />
      <Route path='about' element={<About />} />

      <Route path='chat' element={<Chat />} />
      <Route path='faq' element={<FAQ />} />
      <Route path='privacypolicy' element={<PrivacyPolicy />} />

      <Route path='login' element={<Login />} />
      <Route path='newProduct' element={<NewProduct />} />
      <Route path='admindashboard' element={<AdminDashboard />} />
      <Route path='userdashboard' element={<UserDashboard />} />
      <Route path='signup' element={<Signup />} />
      <Route path='termsandconditions' element={<TermsAndConditions />} />
      <Route path='cart' element={<Cart />} />
      <Route path='placeOrder' element={<PlaceOrder />} />
      <Route path='success' element={<Success />} />
      <Route path='cancel' element={<Cancel />} />

    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
