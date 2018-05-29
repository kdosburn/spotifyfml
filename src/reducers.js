import { combineReducers } from 'redux'
import { RECEIVE_PLAYLISTS } from './actions'
 
function playlistsByUser(
  state = {
    isFetching: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case RECEIVE_PLAYLISTS:
      return Object.assign({}, state, {
        items: action.playlists
      })
    default:
      return state
  }
}
 
const rootReducer = combineReducers({
  playlistsByUser,
})
 
export default rootReducer