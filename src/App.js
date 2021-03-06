import React, { Component } from 'react';
import ListContacts from './ListContacts'
   
class App extends Component {
  state ={
    contacts: [
      {
        id: "kalex",
        name: "Kagame Alex",
        handle: "karen_isgrigg",
        avatarURL: 'http://localhost:5001/scan.jpg'
      },
      {
        id: "richard",
        name: "Richard Kalehoff",
        handle: "richardkalehoff",
        avatarURL: "http://localhost:5001/richard.jpg"
      },
      {
        id: "tyler",
        name: "Tyler McGinnis",
        handle: "tylermcginnis",
        avatarURL: "http://localhost:5001/tyler.jpg"
      }
     ]
    }
  
  render(){
    return (
      <div>
        <ListContacts contacts={this.state.contacts} />
        </div>
    )
  }
}

export default App;
