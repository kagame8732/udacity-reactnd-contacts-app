import React from 'react';
import ReactDOM from 'react-dom';

class ContactList extends React.Component{
  render(){
    const person = [
      {name:'Alex'},
      {name:'Kagame'},
      {name:'Ferg'}
    ]
    
    const element = <ol>
      {person.map((people) => (
        <li key={people.name}>{people.name}</li>
      ))
      }
    </ol>
    
    
  }
}



ReactDOM.render(
  element,
  document.getElementById('root')
)
  

