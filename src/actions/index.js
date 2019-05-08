export function getRawDBData(data) {
  return { type: 'INITIAL_DATA', data };
}

const isLoading = () => ({ type: 'LOADING' });
// const dummyData = [
//   { age: 1, education: 'university' },
//   { age: 51, education: 'university' },
//   { age: 3, education: 'university' },
//   { age: 1, education: 'high school' },
//   { age: 10, education: 'no school' }
// ];

export function fetchDBData() {
  return function(dispatch) {
    dispatch(isLoading());

    fetch('/fetchdata')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        dispatch(getRawDBData(data));
      })
      .catch(err => console.log(err));

    // dispatch(getRawDBData(dummyData));
  };
}
