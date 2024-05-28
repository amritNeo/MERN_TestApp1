import './App.css';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import summaryAPI from './common';
import Context from './context';
import { useDispatch } from 'react-redux';
import { setUserDetails } from './store/userSlice';
function App() {

  const navigate = useNavigate()

  const dispatch = useDispatch()
  const fetchUserDetails = async () => {
    const userDetails = await fetch(summaryAPI.userDetails.url, {
      method: summaryAPI.userDetails.method,
      credentials: 'include'
    })

    const apiData = await userDetails.json();
    console.log(apiData);

    if (apiData.success) {
      dispatch(setUserDetails(apiData))
    }
    if(apiData.error){
      //navigate('/login')
    }
  }

  useEffect(() => {
    fetchUserDetails()
  })

  return (
    <>
      <Context.Provider value={{
        fetchUserDetails //userDetails fetch
      }}>
        <Header></Header>
        <main className='min-h-[calc(100vh-120px)]'>
          <ToastContainer />
          <Outlet />
        </main>
        <Footer></Footer>
      </Context.Provider>
    </>
  );
}

export default App;
