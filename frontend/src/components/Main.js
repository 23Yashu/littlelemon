import { useNavigate } from 'react-router-dom';
import Hero from './Hero';
import Highlights from './Highlights';
import Testimonials from './Testimonials';
import About from './About';


function Main() {
  const navigate = useNavigate();
  const handleBookingButtonClicked = () => {
    navigate('/booking');
  }
  return (
      <main>
            <Hero onReserveClick={handleBookingButtonClicked} />
            <Highlights />
            <Testimonials />
            <About />
      </main>
  )
}

export default Main;
