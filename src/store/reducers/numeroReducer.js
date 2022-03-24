import { NUM_MIN_ALTERADO, NUM_MAX_ALTERADO } from '../actions/actionTypes'

const estadoInicial = {
  min: 1,
  max: 10,
};

function numerosReducer(state = estadoInicial, action) {
  console.log(state, " ", action);
  console.log("reducers numeros...");

  switch (action.type) {
    case NUM_MIN_ALTERADO:
      return {
        ...state,
        min: action.payload,
      };
    case NUM_MAX_ALTERADO:
      return {
        ...state,
        max: action.payload,
      };
    default:
      return estadoInicial;
  }
}


export default numerosReducer;