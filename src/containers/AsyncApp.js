import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchThisUser } from '../actions'
import Playlists from '../components/Playlists'

 
class AsyncApp extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleRefreshClick = this.handleRefreshClick.bind(this)
  }
 
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchThisUser())
  }
 
  componentDidUpdate(prevProps) {
    console.log('component did update')
    // if (this.props. old thig !== prevProps. new thing) {
    //   const { dispatch, the thing to change things } = this.props
    // }
  }
 
  handleChange(nextSubreddit) {
    console.log('handling change')
    // this.props.dispatch(SOON)
  }
 
  handleRefreshClick(e) {
    e.preventDefault()
    // one day things will go here
  }
 
  render() {
    const { playlists } = this.props
    return (
      <div>
        <Playlists playlists={playlists}/>
      </div>
    )
  }
}
 
AsyncApp.propTypes = {
  playlists: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}
 
function mapStateToProps(state) {
  const { playlistsByUser } = state
  const { items: playlists } = playlistsByUser
 
console.log('playlists', playlists)
  return {
    playlists,
  }
}
 
export default connect(mapStateToProps)(AsyncApp)