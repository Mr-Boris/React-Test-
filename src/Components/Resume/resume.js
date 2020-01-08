import React from 'react';

export default class Resume extends React.Component {
   render() {
      return (
         <div>
            <p>{this.props.username}</p>         
         </div>
      );
   }
}
