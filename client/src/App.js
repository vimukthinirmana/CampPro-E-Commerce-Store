import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import toast, { Toaster } from "react-hot-toast";
import Footer from './components/Footer';
import { useEffect } from "react";
import { setDataProduct } from "./redux/productSlide";
import { useDispatch, useSelector } from "react-redux";
import Hero from './components/Hero';


function App() {

  const dispatch = useDispatch()
  const productData = useSelector((state)=>state.product)





  useEffect(()=>{
    (async()=>{
      const res = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/product`)
      const resData = await res.json()
      dispatch(setDataProduct(resData))
    })()
  },[])

  return (
    <>
    <Toaster />
    <div>
      <Header />
      {/* <Hero/> */}
      <main className="pt-12 bg-slate-100 min-h-[calc(100vh)]">
        <Outlet />
      </main>
      <Footer />
    </div>
  </>
  );
}

export default App;
