import React from 'react'

function TestimonialsCard({ userName, userImage, userReview, userRating }) {
  const stars = Array.from({ length: 5 }, (_, i) =>
    i < userRating ? '★' : '☆');
  return (
    <div className='testimonial-card'>
      <div className='rating'> {stars.join(' ')}</div>
      <div className='user-details'>
        <img src={userImage} alt={userName} />
        <h3>{userName}</h3>
      </div>
      <p>{userReview}</p>
    </div>
  )
}

export default TestimonialsCard;
