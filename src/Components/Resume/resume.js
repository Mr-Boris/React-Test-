import React from 'react';

export default class Resume extends React.Component {
   render() {
      const {username} = this.props;
      return (
         <div>
            <h1>Name: {username}</h1>
         </div>
      );
   }
}

