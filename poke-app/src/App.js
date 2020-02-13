import React from 'react';
import './App.css';
import Header from './Header.js';
import PokeList from './ImageList.js';
import pokemon from './Data.js';


export default class App extends Component {
 

  render() {
   

   
    
    return (
      <div>
      <Header/>
      <PokeList pokemon={pokemon}/>
     console.log(pokemon);
       
    
      </div>
    );
  }
}