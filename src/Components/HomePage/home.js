import React from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getUser, updateUsername } from '../../actions/user';

import './home.css';

class Home extends React.Component {
   constructor (props) {
      super(); 
      this.state = {
         username: ''
      }
   }

   async handleSubmit (e) {
      e.preventDefault();
      let user = await this.props.getUser(this.refs.username.value);
      this.setState({username: user.login})
   }

   render() {
      return (
         <div className='container' >
            <div className='formUser'>
               <div className='div'>
                  <form onSubmit={e => this.handleSubmit(e)} className='inputDiv'>
                     <p>Input GitHub Username</p>
                     <input 
                        ref='username'
                        value={this.props.user.username}
                        onChange={username => this.props.updateUsername(username)}
                        type='text'
                        placeholder='Username' />
                      <div className='buttonDiv'>
                        <div><button className='button'>Submit</button></div>
                      </div>
                  </form>
               </div>
               <h1>{this.state.username}</h1>
               <h1>{this.props.user.username}</h1>
               
            </div>
         </div>
      );
   }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ getUser, updateUsername }, dispatch)
}

const mapStateToProps = state => {
  return {
    user: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

