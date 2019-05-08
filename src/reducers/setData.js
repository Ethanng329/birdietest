export default function setInitialData(state = {}, action) {
  switch (action.type) {
    case 'INITIAL_DATA':
      return action.data;
    default:
      return state;
  }
}
