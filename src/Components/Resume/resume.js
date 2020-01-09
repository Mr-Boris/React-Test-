import React from 'react';

import { connect } from 'react-redux'


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

