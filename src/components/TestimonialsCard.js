import React from 'react'

function TestimonialsCard({userName, userImage, userReview, userRating}) {
    const stars = Array.from({ length: 5 }, (_, i) => 
    i < userRating ? '★' : '☆');
  return (
    <div>
      <div className='rating'> {stars.join(' ')}</div>
      <img src={userImage} alt={userName} />
      <h3>{userName}</h3>
      <p>{userReview}</p>
    </div>
  )
}

export default TestimonialsCard;
