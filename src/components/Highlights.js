import React from 'react'
import HighlightsCard from './HighlightsCard';
import greeksalad from '../img/greeksalad.jpg';
import bruschetta from '../img/bruchetta.jpg';
import lemondessert from '../img/lemondessert.jpg';
function Highlights() {
  return (
    <section className="highlights" id='menu'>
      <div className='highlights-header-mobile'>
        <div className="highlights-header-mobile-title">
          <h1>ORDER FOR DELIVERY!</h1>
        </div>
        <div className="highlights-mobile-buttons">
          <button>Lunch</button>
          <button>Mains</button>
          <button>Desserts</button>
          <button>A La Carte</button>
          <button>Specials</button>
          <button>Dinner</button>
          <button>Breakfast</button>
          <button>Healthy</button>
        </div>
      </div>
      <div className="highlights-header">
        <h1>This week's Specials!</h1>
        <button>Online Menu</button>
      </div>
      <div className='highlights-cards'>
        <HighlightsCard dishImage={greeksalad} dishName="Greek Salad" dishPrice="$12.99" dishDescription="The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons." />
        <HighlightsCard dishImage={bruschetta} dishName="Bruschetta" dishPrice="$7.99" dishDescription="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive." />
        <HighlightsCard dishImage={lemondessert} dishName="Lemon Dessert" dishPrice="$9" dishDescription="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined." />
      </div>
    </section>
  )
}

export default Highlights
