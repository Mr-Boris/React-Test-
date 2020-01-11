import React from 'react';

import { connect } from 'react-redux';

import { searchUser } from '../../store/actions/user';

import './home.css';

class Home extends React.Component {
   constructor (props) {
      super(); 
      this.state = {
         username: ''
      }
   }

   handleSubmit = async (e) => {
      e.preventDefault();
      await this.props.searchUser(this.state.username);
   }

   handleChange = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
   }

   render() {
      return (
         <div className='container' >
            <div className='formUser'>
               <div className='div'>
                  <form onSubmit={this.handleSubmit} className='inputDiv'>
                     <p>Input GitHub Username</p>
                     <input 
                        name='username'
                        value={this.state.username}
                        onChange={this.handleChange}
                        type='text'
                        placeholder='Username'
                     />
                      <div className='buttonDiv'>
                        <div><button className='button'>Submit</button></div>
                      </div>
                  </form>
               </div>
               {console.log(this.props)}
            </div>
         </div>
      );
   }
}

const mapStateToProps = state => ({
   user: state.user.currentUser,
});

export default connect(mapStateToProps, { searchUser })(Home)

