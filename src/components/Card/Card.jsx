// import React from 'react'
// import CardOne from '../../assets/Card-1.png'
import PropTypes from "prop-types";
import './Card.css';

const Card = ({image, title, description, language, author}) => {
    console.log("Card Props:", { image, title, description, language, author });

  return (
    <div className="card">
        {/* Image Section  */}
        <div className="card-image">
            <img src={image} alt={title} />
        </div>

        {/* Content- section */}
        <div className="card-content">
        <h3 className="card-title">{title}</h3>
            <p className="card-description">
               {description}
            </p>


            <div className="card-info">
            <span className="language">{language}</span>
            <span className="author"><span className="bold-author-text">{author}</span></span>
            <button className="add-to-cart">Add to Cart</button>
            </div>

        </div>
    </div>
  );
};

Card.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  };
export default Card;