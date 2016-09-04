import React from 'react'
import {connect} from 'react-redux'
import {fetchUser} from '../actions/userActions'

// '@connect' will enable inclusion of both 'components' and 'container' files into one.
//  Install 'babel-plugin-transform-decorators-legacy' to enable use of @connect.
//  It will inject props (i.e. the return values) into in the 'layout' component when it is loaded.
@connect((store) => {    
  return {               
    user: store.userA.user,
    test: store.userA.users,   // 'test' => can be called anything, e.g. 'userList'
    tweets: store.tweets
  };
})

export default class Layout extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchUser())
  }
  render() {
    console.log(this.props);
  	return ( 
  	  <div>
        <h1>Hello Pyramids</h1>
        <h3>{this.props.user.name}, Age: {this.props.user.age}</h3>
      </div>
  	);
  }
}