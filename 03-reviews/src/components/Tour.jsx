import React, { useState } from 'react';

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article class="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {/* Display full info if readMore is true, otherwise, show a truncated version */}
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)} className="info-btn">
            {readMore ? 'show less' : '  read more'}
          </button>
        </p>
        {/* remove a single tour */}
        <button
          className="delete-btn btn-block btn"
          onClick={() => removeTour(id)}
        >
          not interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
