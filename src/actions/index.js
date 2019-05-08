export function getRawDBData(data) {
  return { type: 'INITIAL_DATA', data };
}

const isLoading = () => ({ type: 'LOADING' });

export function fetchDBData() {
  return function(dispatch) {
    dispatch(isLoading());

    fetch('/fetchdata')
      .then(res => res.json())
      .then(data => {
        dispatch(getRawDBData(data));
      })
      .catch(err => console.log(err));
  };
}
