import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Player from '../../components/player/player';
import Opponent from '../../components/opponent/Opponent';
import Lobby from '../../components/lobby/Lobby';
import Navigation from '../../components/navigation/Navigation';
import StartHand from '../../components/starthand/StartHand';
import { playLocation, playCharacter } from '../../redux/actions/hand'
import { kneelLocation, standLocation } from '../../redux/actions/location';
import { addOpponentLocation, kneelOpponentLocation, standOpponentLocation } from '../../redux/actions/opponentLocation';
import { kneelCharacter, standCharacter } from '../../redux/actions/character';
import { addOpponentCharacter, kneelOpponentCharacter, standOpponentCharacter } from '../../redux/actions/opponentCharacter';
import { drawCard, getStartHand, doMulligan } from '../../redux/actions/deck';
import { newGame } from '../../redux/actions/game';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './board.scss'

const Board = ({
  socket,
  deck,
  hand,
  locations, opponentLocations, locationActions, opponentLocationActions,
  characters, opponentCharacters, characterActions, opponentCharacterActions,
  deckActions,
  gameActions
}) => {
  let starthand = false;
  if (starthand) {
    return (
      <div className='board'>
        <StartHand deck={deck} hand={hand} deckActions={deckActions}/>
      </div>
    )
  } else {
    return (
      <div className='board'>
        <Opponent
          socket={socket}
          locations={opponentLocations}
          locationActions={opponentLocationActions}
          characters={opponentCharacters}
          characterActions={opponentCharacterActions}
        />
        <Player
          deck={deck}
          hand={hand}
          locations={locations}
          characters={characters}
          deckActions={deckActions}
          locationActions={locationActions}
          characterActions={characterActions}
        />
      </div>
    )
  }
}

Board.propTypes = {
  socket: PropTypes.object.isRequired,
  deck: PropTypes.array.isRequired,
  hand: PropTypes.array.isRequired,
  locations: PropTypes.array.isRequired,
  opponentLocations: PropTypes.array.isRequired,
  characters: PropTypes.array.isRequired,
  opponentCharacters: PropTypes.array.isRequired,
  deckActions: PropTypes.shape({
    drawCard: PropTypes.func.isRequired,
    getStartHand: PropTypes.func,
    doMulligan: PropTypes.func
  }),
  locationActions: PropTypes.shape({
    playLocation: PropTypes.func.isRequired,
    kneelLocation: PropTypes.func.isRequired,
    standLocation: PropTypes.func.isRequired,
  }),
  opponentLocationActions: PropTypes.shape({
    addOpponentLocation: PropTypes.func.isRequired,
    kneelOpponentLocation: PropTypes.func.isRequired,
    standOpponentLocation: PropTypes.func.isRequired,
  }),
  characterActions: PropTypes.shape({
    playCharacter: PropTypes.func.isRequired,
    kneelCharacter: PropTypes.func.isRequired,
    standCharacter: PropTypes.func.isRequired,
  }),
  opponentCharacterActions: PropTypes.shape({
    addOpponentCharacter: PropTypes.func.isRequired,
    kneelOpponentCharacter: PropTypes.func.isRequired,
    standOpponentCharacter: PropTypes.func.isRequired,
  }),
  gameActions: PropTypes.shape({
    newGame: PropTypes.func.isRequired,
  })
}

const mapStateToProps = (state) => ({
  deck: state.deckReducer,
  hand: state.handReducer,
  locations: state.locationReducer,
  opponentLocations: state.opponentLocationReducer,
  characters: state.characterReducer,
  opponentCharacters: state.opponentCharacterReducer,
  game: state.gameReducer
})

const mapDispatchToProps = (dispatch) => ({
  deckActions: bindActionCreators({
    drawCard,
    getStartHand,
    doMulligan
  }, dispatch),
  locationActions: bindActionCreators({
    playLocation,
    standLocation,
    kneelLocation,
  }, dispatch),
  opponentLocationActions: bindActionCreators({
    addOpponentLocation,
    kneelOpponentLocation,
    standOpponentLocation,
  }, dispatch),
  characterActions: bindActionCreators({
    playCharacter,
    standCharacter,
    kneelCharacter,
  }, dispatch),
  opponentCharacterActions: bindActionCreators({
    addOpponentCharacter,
    kneelOpponentCharacter,
    standOpponentCharacter,
  }, dispatch),
  gameActions: bindActionCreators({
    newGame,
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Board)
