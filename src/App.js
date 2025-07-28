import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useMediaQuery } from '@chakra-ui/react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Reservation from '../src/components/Reservation';
import SecondaryHeader from './components/SecondaryHeader';
import SecondaryFooter from './components/SecondaryFooter';

function ReservationPage() {
  const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)');
  return (
    <>
      {isLargerThan1024 ? <Header /> : <SecondaryHeader />}
      <Reservation />
      {isLargerThan1024 && <SecondaryFooter />}
    </>
  )
}

function HomePage() {
  const location = useLocation();
  useEffect(() => {
    if(location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if(element) {
        element.scrollIntoView({ behavior: 'smooth'});
      }
    }
  }, [location]);
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <HomePage />
          }
        />
        <Route
          path='/reservation'
          element={
            <ReservationPage />
          }
        />
      </Routes>
    </>
  );
}

export default App;
