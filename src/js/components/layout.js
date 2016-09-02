import React from 'react'
import {connect} from 'react-redux'

import {fetchUser} from '../actions/userActions'

@connect((store) => {
  return {
  	user: store.user.user,
  	userFetched: store.user.fetched
// 	tweets: store.tweets.tweets
  };
})

export default class Layout extends React.Component {
  componentWillMount() {
  	this.props.dispatch(fetchUser())
  }
  render() {
  	console.log(this.props)
  	return (
  	<div>
      <h1>Hello Work!</h1>
      <h1>{this.props.user.name}</h1>
    </div>
  	);
  }
}