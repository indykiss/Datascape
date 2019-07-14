
export const fetchScapes = () => dispatch => {
  return fetch('http://localhost:3001/scapes')
  .then(handleError)
  .then(scapes => dispatch({ type: 'FETCH_SCAPES_SUCCESS', payload: scapes}))
  .catch(error => console.log(error))
}

export const fetchScape = (scapeId) => dispatch => {
    return fetch(`http://localhost:3001/scapes/${scapeId}`)
    .then(handleError)
    .then(scape => dispatch({ type: 'FETCH_SCAPE_SUCCESS', payload: scape}))
    .catch(error => console.log(error))
}

export const addScape = (scape) => dispatch => {
    return fetch('http://localhost:3001/scapes', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(scape)
    })
    .then(handleError)
    .then(scape => dispatch({ type: 'ADD_SCAPE_SUCCESS', payload: scape }))
    .catch(error => console.log(error))
}

function handleError(response){
    if (!response.ok) {
        console.log(response)
        return Promise.reject(response.statusText)
    }
    return response.json()
}
