import React from "react";


const Card = (propiedades) => {
    const {title, color, image} = propiedades;
    return(
        <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="card h-100 border-0 bg-transparent">
        <div className="bg-light overflow-hidden" style={{ aspectRatio: '3/4' }}>
          <img src={image} className="card-img-top w-100 h-100 object-fit-cover" alt={title} />
        </div>
        <div className="card-body px-0 pt-3">
          <p className="text-muted text-uppercase fw-semibold l-spacing small mb-1">{color}</p>
          <h5 className="card-title fw-normal text-dark mb-2">{title}</h5>
        </div>
        </div>
    </div>
  );
};
    
export default Card;