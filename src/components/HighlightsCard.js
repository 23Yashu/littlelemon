import React from 'react'

function HighlightsCard({dishImage, dishName, dishPrice, dishDescription}) {
  return (
    <div>
        <img src={dishImage} alt={dishName} />
        <h3>{dishName}</h3>
        <h3>{dishPrice}</h3>
        <p>{dishDescription}</p>
    </div>
  )
}

export default HighlightsCard;
