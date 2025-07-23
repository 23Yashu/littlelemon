import restaurantfood from '../img/restauranfood.jpg';

function Hero() {
  return (
    <section className='hero'>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <img src={restaurantfood} alt="Restaurant Food" />
        <button>Reserve a Table</button>
    </section>
  );
}

export default Hero;
