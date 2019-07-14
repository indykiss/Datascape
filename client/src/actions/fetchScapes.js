
export default function fetchScapes() {
    return (dispatch) => {
      dispatch({type: 'LOADING_SCAPES'});
      return fetch("/scapes")
      .then(response => response.json())
      .then(responseJSON => {
         dispatch({type: "FETCH_SCAPES", payload: responseJSON})
      })
    }
  }