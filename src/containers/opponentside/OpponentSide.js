import React from 'react';
import PropTypes from 'prop-types';
import OpponentLocation from '../../components/location/OpponentLocation';
import OpponentCharacter from '../../components/character/OpponentCharacter';
import OpponentPlot from '../../components/plot/OpponentPlot';
import { addOpponentLocation, kneelOpponentLocation, standOpponentLocation } from '../../redux/actions/opponent/opponentLocation';
import { addOpponentCharacter, kneelOpponentCharacter, standOpponentCharacter } from '../../redux/actions/opponent/opponentCharacter';
import { addOpponentPlot } from '../../redux/actions/opponent/opponentPlot';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './OpponentSide.scss';

const OpponentSide = ({
  socket,
  dispatch,
  gameflow,
  locations,
  locationActions,
  characters,
  characterActions,
  plotInPlay,
  plotActions,
}) => {
  return (
    <div className="opponent-inner">
      <OpponentCharacter
        socket={socket}
        dispatch={dispatch}
        cards={characters}
        actions={characterActions}
        gameflow={gameflow}
      />
      <OpponentLocation
        socket={socket}
        dispatch={dispatch}
        cards={locations}
        actions={locationActions}
      />
      <OpponentPlot
        socket={socket}
        dispatch={dispatch}
        cards={plotInPlay}
        actions={plotActions}
        gameflow={gameflow}
      />
    </div>
  );
};

OpponentSide.propTypes = {
  socket: PropTypes.object.isRequired,
  gameflow: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  actions: PropTypes.object,
  characters: PropTypes.array.isRequired,
  characterActions: PropTypes.object.isRequired,
  locations: PropTypes.array.isRequired,
  locationActions: PropTypes.object.isRequired,
  plotInPlay: PropTypes.array.isRequired,
  plotActions: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  plotInPlay: state.opponent.opponentPlotReducer,
  locations: state.opponent.opponentLocationReducer,
  characters: state.opponent.opponentCharacterReducer,
})

const mapDispatchToProps = (dispatch) => ({
  locationActions: bindActionCreators({
    addOpponentLocation,
    kneelOpponentLocation,
    standOpponentLocation,
  }, dispatch),
  characterActions: bindActionCreators({
    addOpponentCharacter,
    kneelOpponentCharacter,
    standOpponentCharacter,
  }, dispatch),
  plotActions: bindActionCreators({
    addOpponentPlot,
  }, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(OpponentSide);
