import React from 'react'
import TestimonialsCard from './TestimonialsCard';
import user1 from '../img/user1.jpg';
import user2 from '../img/user2.jpeg';
import user3 from '../img/user3.jpeg';
import user4 from '../img/user4.jpeg';

function Testimonials() {
  return (
    <div>
      <h2>Testimonials</h2>
      <TestimonialsCard userName="Sophia Patel" userImage={user1} userReview="Absolutely loved the food and the ambiance! Will visit again." userRating={5}/>
      <TestimonialsCard userName="Liam Chen" userImage={user2} userReview="Great service and delicious dishes. Highly recommended." userRating={4}/>
      <TestimonialsCard userName="Ava Johnson" userImage={user3} userReview="The desserts were amazing, especially the lemon cake!" userRating={5}/>
      <TestimonialsCard userName="Noah Smith" userImage={user4} userReview="Nice place for family dinners. The staff was very friendly." userRating={4}/>
    </div>
  )
}

export default Testimonials
