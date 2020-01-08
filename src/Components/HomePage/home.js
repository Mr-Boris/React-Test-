import React from 'react';

import './home.css';


export default class Resume extends React.Component {
   constructor (props) {
      super(); 
      this.state = {
         username: ''
      }
   }

   getUser(username) {
      
       return  fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(response => {
          console.log(response);
          return response;
      })
   }
   
    async  handleSubmit (e) {
      e.preventDefault();
      let user = await this.getUser(this.refs.username.value);
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
                        type='text'
                        placeholder='Username' />
                      <div className='buttonDiv'>
                        <button className='button'>Click Me</button>
                      </div>
                  </form>
            </div>
         </div>
      </div>

      );
   }
}
