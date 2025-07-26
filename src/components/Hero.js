import restaurantfood from '../img/restauranfood.jpg';

function Hero() {
  return (
    <section className='hero' id='home'>
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <div className='hero-text-content'>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        </div>
        <button className='reserve-button'>Reserve a Table</button>
      </div>
      <div className="hero-image">
        <img src={restaurantfood} alt="Restaurant Food" />
      </div>

    </section>
  );
}

export default Hero;
