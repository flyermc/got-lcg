export const machineState = {
  name: 'new game',
  isFirstPlayer: false,
  isPlayerTurn: false,
  isPlayerDone: false,
  isOpponentDone: false,
  isYourTurn: false,
};

export const machineTransitions = {
  'new game': {
    'goto setup': function (state, isFirstPlayer, isYourTurn) {
      console.log(state)
      return {
        ...state,
        name: 'setup phase',
        isFirstPlayer,
        isYourTurn,
        isPlayerDone: false,
        isOpponentDone: false,
      }
    }
  },
  'setup phase': {
    'player done': function (state) {
      console.log('PLAYER DONE:')
      console.log(state);
      return {
        ...state,
        name: 'setup phase',
        isPlayerDone: true
      }
    },
    'opponent done': function (state) {
      console.log('OPPONENT DONE:')
      console.log(state);
      return {
        ...state,
        isOpponentDone: true
      }
    },
    'goto plot': function (state) {
      console.log('GOTO PLOT:')
      console.log(state);
      return {
        ...state,
        name: 'plot phase',
        isOpponentDone: false,
        isPlayerDone: false,
        isFirstPlayer: false,
      }
    },
  },
  'plot phase': {
    'player done': function (state) {
      console.log('PLAYER DONE:')
      console.log(state);
      return {
        ...state,
        isPlayerDone: true
      }
    },
    'opponent done': function (state) {
      console.log('OPPONENT DONE:')
      console.log(state);
      return {
        ...state,
        isOpponentDone: true
      }
    },
    'set first player': function (state, isFirstPlayer) {
      console.log('SET FIRST PLAYER:')
      console.log(state);
      return {
        ...state,
        isFirstPlayer,
        isYourTurn: isFirstPlayer,
        isOpponentDone: false,
        isPlayerDone: false,
      }
    },
    'goto draw': function (state) {
      console.log('GOTO DRAW:')
      console.log(state);
      return {
        ...state,
        name: 'draw phase',
        isOpponentDone: false,
        isPlayerDone: false,
      }
    },
  },
  'draw phase': {
    'player done': function (state) {
      console.log('PLAYER DONE:')
      console.log(state);
      return {
        ...state,
        isPlayerDone: true
      }
    },
    'opponent done': function (state) {
      console.log('OPPONENT DONE:')
      console.log(state);
      return {
        ...state,
        isOpponentDone: true
      }
    },
    'goto next': function (state) {
      console.log('GOTO NEXT:')
      console.log(state);
      return {
        ...state,
        name: 'marshaling phase',
        isOpponentDone: false,
        isPlayerDone: false,
        isYourTurn: state.isFirstPlayer,
      }
    },
  },
  'marshaling phase': {
    'player done': function (state) {
      console.log('PLAYER DONE:');
      console.log(state);
      return {
        ...state,
        isPlayerDone: true,
      };
    },
    'opponent done': function (state) {
      console.log('OPPONENT DONE:')
      console.log(state);
      return {
        ...state,
        isOpponentDone: true
      }
    },
    'your turn': function (state, isYourTurn) {
      console.log('YOUR TURN:')
      console.log(state);
      return {
        ...state,
        isYourTurn,
      }
    },
    'goto next': function (state) {
      console.log('GOTO NEXT:')
      console.log(state);
      return {
        ...state,
        name: 'challenges phase',
        isYourTurn: state.isFirstPlayer,
      }
    },
  },
  'challenges phase': {
    'player done': function (state) {
      console.log('PLAYER DONE:')
      console.log(state);
      return {
        ...state,
        isPlayerDone: true,
      }
    },
    'opponent done': function (state) {
      console.log('OPPONENT DONE:')
      console.log(state);
      return {
        ...state,
        isOpponentDone: true
      }
    },
    'your turn': function (state, isYourTurn) {
      console.log('YOUR TURN:')
      console.log(state);
      return {
        ...state,
        isYourTurn,
      }
    },
    'goto next': function (state) {
      console.log('GOTO NEXT:')
      console.log(state);
      return {
        ...state,
        name: 'dominance phase',
        isYourTurn: state.isFirstPlayer,
      }
    }
  },
  'dominance phase': {
    'player done': function (state) {
      console.log('PLAYER DONE:')
      console.log(state);
      return {
        ...state,
        isPlayerDone: true,
      }
    },
    'opponent done': function (state) {
      console.log('OPPONENT DONE:')
      console.log(state);
      return {
        ...state,
        isOpponentDone: true
      }
    },
    'your turn': function (state, isYourTurn) {
      console.log('YOUR TURN:')
      console.log(state);
      return {
        ...state,
        isYourTurn,
      }
    },
    'goto next': function (state) {
      console.log('GOTO NEXT:')
      console.log(state);
      return {
        ...state,
        name: 'standing phase',
        isYourTurn: state.isFirstPlayer,
      }
    }
  },
  'standing phase': {
    'player done': function (state) {
      console.log('PLAYER DONE:')
      console.log(state);
      return {
        ...state,
        isPlayerDone: true,
      }
    },
    'opponent done': function (state) {
      console.log('OPPONENT DONE:')
      console.log(state);
      return {
        ...state,
        isOpponentDone: true
      }
    },
    'your turn': function (state, isYourTurn) {
      console.log('YOUR TURN:')
      console.log(state);
      return {
        ...state,
        isYourTurn,
      }
    },
    'goto next': function (state) {
      console.log('GOTO NEXT:')
      console.log(state);
      return {
        ...state,
        name: 'taxation phase',
        isYourTurn: state.isFirstPlayer,
      }
    }
  },
  'taxation phase': {
    'player done': function (state) {
      console.log('PLAYER DONE:')
      console.log(state);
      return {
        ...state,
        isPlayerDone: true,
      }
    },
    'opponent done': function (state) {
      console.log('OPPONENT DONE:')
      console.log(state);
      return {
        ...state,
        isOpponentDone: true
      }
    },
    'your turn': function (state, isYourTurn) {
      console.log('YOUR TURN:')
      console.log(state);
      return {
        ...state,
        isYourTurn,
      }
    },
    'goto next': function (state) {
      console.log('GOTO NEXT:')
      console.log(state);
      return {
        ...state,
        name: 'plot phase',
        isYourTurn: state.isFirstPlayer,
      }
    }
  }
};
