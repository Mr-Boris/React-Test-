import React from 'react';

import { connect } from 'react-redux';

import { searchUser } from '../../store/actions/user';
import { searchOrg } from '../../store/actions/org';
import { searchRepo } from '../../store/actions/repo';
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
      await this.props.searchOrg(this.state.username);
      await this.props.searchRepo(this.state.username);
      // redirect to resume page, use react-router-dom
      this.props.history.push('./resume')
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
                  <form className='inputDiv'>
                     <p>Input GitHub Username</p>
                     <input 
                        name='username'
                        value={this.state.username}
                        onChange={this.handleChange}
                        type='text'
                        placeholder='Username' />
                      <div className='buttonDiv'>
                        <div>
                           <button onClick={this.handleSubmit}className='button'>Submit</button>
                        </div>
                      </div>
                  </form>
               </div>
            </div>
         </div>
      );
   }
}

const mapStateToProps = state => ({
   user: state.user.currentUser,
   org: state.user.searchOrgs,
});

export default connect(mapStateToProps, {searchUser, searchOrg, searchRepo})(Home)

