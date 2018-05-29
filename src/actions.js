import fetch from 'cross-fetch'
import secret from './components/secret'

  
export const REQUEST_USER = 'REQUEST_USER'
export const RECEIVE_PLAYLISTS = 'RECEIVE_PLAYLISTS'

export function requestUser(){
  return {
    type: REQUEST_USER
  }
}

function receivePlaylists(json) {
  return {
    type: RECEIVE_PLAYLISTS,
    playlists: json.items.map(child => child),
    receivedAt: Date.now()
  }
}
 
export function fetchThisUser(){
  console.log('SECRET', secret)
  return dispatch => {
    dispatch(requestUser())
    return fetch('https://api.spotify.com/v1/users/124465854/playlists', {
      method: "GET",
      headers: {
      "Authorization": "Bearer "+ secret
  },
    }).then(response => response.json())
    .then(json => dispatch(receivePlaylists(json)))
  }
}
