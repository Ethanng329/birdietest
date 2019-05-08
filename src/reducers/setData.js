export default function setInitialData(state = {}, action) {
  switch (action.type) {
    case 'INITIAL_DATA': {
      return {
        ...state,
        rawData: action.data,
        loading: false
      };
    }
    case 'LOADING': {
      return {
        ...state,
        loading: true
      };
    }
    default:
      return state;
  }
}
