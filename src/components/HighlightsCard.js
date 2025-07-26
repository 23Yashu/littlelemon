import deliveryicon from '../icons/food-delivery.svg';

function HighlightsCard({ dishImage, dishName, dishPrice, dishDescription }) {
  return (
    <div className='highlights-card'>
      <div className='desktop-highlights'>
        <img src={dishImage} alt={dishName} />
        <div className='highlights-card-text'>
          <h3 className='dish-name'>{dishName}</h3>
          <h3 className='dish-price'>{dishPrice}</h3>
        </div>
        <p>{dishDescription}</p>
        <div className='delivery'>
          <p>Order a delivery</p>
          <img src={deliveryicon} alt="Delivery Icon" />
        </div>
      </div>
      <hr className='highlights-horizontal-line'/>
      <div className='mobile-highlights'>
        <div className='mobile-highlights-details'>
          <h3 className='dish-name'>{dishName}</h3>
          <p>{dishDescription}</p>
          <h3 className='dish-price'>{dishPrice}</h3>
        </div>
        <div className='mobile-highlights-image'>
          <img src={dishImage} alt={dishName} />
        </div>
      </div>

    </div>
  )
}

export default HighlightsCard;
