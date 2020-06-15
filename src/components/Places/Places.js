import React from 'react';
import "./Places.css";

export function Places({data}) {
  return (
    <div className="content">
      {   data.map(obj => {
      return (
        <div className="card">
          <a href={obj.url} className="card__image-container">
          <img className="card__image" src={obj.image_url} alt="kekw"></img>
          </a>
          <h2 className="card__name">{obj.name}</h2>
          <div className="card__info-container">
          <div className="card__address">
            <p>{obj.location.address1}</p>
            <p>{obj.location.city}</p>
            <p>{obj.location.state} {obj.location.zip_code}</p>
          </div>
          <div className="card__review">
            <h3>{obj.categories[0].title}</h3>
            <h3 className="card__rating">{obj.rating} stars</h3>
            <p> Reviews: {obj.review_count}</p>
          </div>
          </div>
        </div>
      )
    })}
    </div>
  );
}