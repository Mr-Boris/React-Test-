import React from 'react';

import './home.css';

export default class Home extends React.Component {
   constructor (props) {
      super(); 
      this.state = {
         bio: null,
         name: null,
         blog: null,
         avatar_url: null,
         created_at: null,
         public_repos: null,
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
   
   async handleSubmit (e) {
      e.preventDefault();
      let user = await this.getUser(this.refs.username.value);
      this.setState({
         bio: user.bio,
         name: user.name,
         blog: user.blog,
         created_at: user.created_at,
         public_repos: user.public_repos,
      })
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
                        <div><button className='button'>Submit</button></div>
                      </div>
                  </form>
               </div>
            </div>
         </div>
      );
   }
}
