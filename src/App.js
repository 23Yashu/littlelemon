import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useReducer } from 'react';
import { useMediaQuery } from '@chakra-ui/react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Booking from './components/Booking';
import SecondaryHeader from './components/SecondaryHeader';
import SecondaryFooter from './components/SecondaryFooter';
import Payment from './components/Payment';
import Alert from './components/Alert';
import Login from './components/Login';
import ConfirmedBooking from './components/ConfirmedBooking';
import { initializeTimes, updateTimes } from './utils/timesReducer';

function BookingPage() {
  const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)');
  const [availableTimes, dispatchAvailableTimes] = useReducer(updateTimes, [], initializeTimes);
  return (
    <>
      {isLargerThan1024 ? <Header /> : <SecondaryHeader />}
      <Booking
        availableTimes={availableTimes}
        dispatchAvailableTimes={dispatchAvailableTimes}
      />
      {isLargerThan1024 && <SecondaryFooter />}
    </>
  )
}

function PaymentPage() {
  const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)');
  return (
    <>
      {isLargerThan1024 ? <Header /> : <SecondaryHeader />}
      <Payment />
      {isLargerThan1024 && <SecondaryFooter />}
    </>
  )
}

function LoginPage() {
  const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)');
  return (
    <>
      {isLargerThan1024 ? <Header /> : <SecondaryHeader />}
      <Login />
      {isLargerThan1024 && <SecondaryFooter />}
    </>
  )
}

function ConfirmedBookingPage () {
  const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)');
  return (
    <>
      {isLargerThan1024 ? <Header /> : <SecondaryHeader />}
      <ConfirmedBooking />
      {isLargerThan1024 && <SecondaryFooter />}
    </>
  )
}

function HomePage() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
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
          path='/booking'
          element={
            <BookingPage />
          }
        />
        <Route
          path='/payment'
          element={
            <PaymentPage />
          }
        />
        <Route
          path='/login'
          element={
            <LoginPage />
          }
        />
        <Route
          path='/confirmed'
          element={
            <ConfirmedBookingPage />
          }
        />
      </Routes>
      <Alert />
    </>
  );
}

export default App;
