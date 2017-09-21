import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './card.scss';

const Card = ({name, kneel, image_url, revealed, isDragging }) => {
  return (
    <div className={kneel ? 'card card-kneeled' : 'card'} style={{ opacity: isDragging ? 0.5 : 1}}>
      <img src={image_url} />
    </div>
  )
}

Card.propTypes = {
  uid: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  image_url: PropTypes.string,
  name: PropTypes.string,
  kneel: PropTypes.bool,
  type: PropTypes.string,
  kneel: PropTypes.bool,
  revealed: PropTypes.bool.isRequired,
  action: PropTypes.func,
  isDragging: PropTypes.bool.isRequired,
};

export default Card
