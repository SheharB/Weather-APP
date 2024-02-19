
import  React from 'react';

class Users extends React.Component{
    render(){

        console.log("Render Method", this.props)
        return (
          <div className="App">
            <h1>User Components {this.props.name}</h1>
          </div>
        )
      }
}


export default Users;
