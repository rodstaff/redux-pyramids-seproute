import React from 'react'
import {connect} from 'react-redux'

import {fetchUser} from '../actions/userActions'

@connect((store) => {    // < install: 'babel-plugin-transform-decorators-legacy'
  return {
    user: store.user.user,
    userFetched: store.user.fetched
// // // 	tweets: store.tweets.tweets
  };
})

export default class Layout extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchUser())
  }
  render() {
    // console.log(this.props);
    console.log(this.props);
  	return ( 
  	  <div>
        <h1>Hello Work!!!</h1>

      </div>
  	);
  }
}