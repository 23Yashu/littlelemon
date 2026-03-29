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

const API_BASE = "https://thorough-fascination-production.up.railway.app";

export const timesReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TIMES':
            return action.payload;
        default:
            return state;
    }
}
function BookingPage() {
  const [isLargerThan1024] = useMediaQuery('(min-width: 1024px)');
  const [availableTimes, dispatch] = useReducer(timesReducer, []);

  const fetchBackendAvailability = async (date) => {
      try {
          const response = await fetch(`${API_BASE}/api/bookings/availability?date=${date}`);
          const data = await response.json();
          console.log("Data received from backend: ", data);
          if (!Array.isArray(data)) {
              console.error("Backend did not return an array. Check the console for the error object");
              return;
          }
          const realTimes = data
              .filter(slot => slot.isAvailable)
              .map(slot => slot.time);
          dispatch({ type: 'SET_TIMES', payload: realTimes });
      } catch (error) {
          console.error("Failed to fetch from Spring Boot: ", error);
      }
  }

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        fetchBackendAvailability(today);
    }, []);
  return (
    <>
      {isLargerThan1024 ? <Header /> : <SecondaryHeader />}
      <Booking
        availableTimes={availableTimes}
        dispatchAvailableTimes={dispatch}
        updateTimes={fetchBackendAvailability}
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
