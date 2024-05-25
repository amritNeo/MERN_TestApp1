import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header></Header>
      <main className='min-h-[calc(100vh-120px)]'>
        <Outlet />
      </main> 
      <Footer></Footer>
    </>
  );
}

export default App;
