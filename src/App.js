import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';


function App() {
  return (
    <div>
     <Header/>
     <main className='pt-16 bg-slate-50 min-h-[calc(100vh)]'>
        <Outlet/>
     </main>
    </div>
  );
}

export default App;
