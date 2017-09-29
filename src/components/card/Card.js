import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import './card.scss';

const Card = ({name, kneel, opponent, image_url, revealed, isDragging }) => {
  let cardClass = classNames({
    'card': true,
    'card-kneeled': kneel,
    'card-opponent': opponent
  })
  return (
    <div className={cardClass} style={{ opacity: isDragging ? 0.5 : 1}}>
      <img src={image_url} />
    </div>
  )
}

Card.propTypes = {
  uid: PropTypes.string.isRequired,
  image_url: PropTypes.string,
  name: PropTypes.string,
  kneel: PropTypes.bool,
  type: PropTypes.string,
  cardlocation: PropTypes.string.isRequired,
  kneel: PropTypes.bool,
  revealed: PropTypes.bool.isRequired,
  opponent: PropTypes.bool,
  action: PropTypes.func,
  isDragging: PropTypes.bool,
};

export default Card
