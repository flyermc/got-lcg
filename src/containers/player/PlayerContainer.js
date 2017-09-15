import React from 'react'
import PropTypes from 'prop-types'
import Player from '../../components/player/player'
import { playCard, drawCard } from '../../redux/actions/card'
import { addLocation } from '../../redux/actions/location';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const PlayerContainer = ({hand, locations, drawCard, playCard, addLocation}) => {
  return (
    <Player cards={hand} locations={locations} onDeckClick={drawCard} onPlayCard={playCard} onAddLocation={addLocation} />
  )
}

PlayerContainer.propTypes = {
  hand: PropTypes.array.isRequired,
  locations: PropTypes.array.isRequired,
  drawCard: PropTypes.func.isRequired,
  playCard: PropTypes.func.isRequired,
  addLocation: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    hand: state.handReducer ,
    locations: state.locationReducer
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ drawCard, playCard, addLocation }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer)
