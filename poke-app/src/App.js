import React,{ Component } from 'react';
import './App.css';
import Header from './Header.js';
import PokeList from './PokeList.js';



export default class App extends Component{
  state={
    loading: true,
    pokeData:null,
  }
  async componentDidMount(){
    const url = "https://alchemy-pokedex.herokuapp.com/api/pokedex";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({pokeData:data.results, loading:false})
    console.log(data.results);
    console.log(this.state.pokeData);

  }
 

  render() {
    return (
      <div>
        {this.state.loading || !this.state.pokeData?(
          <div>loading...</div>
        ): (
        <div>
          <Header/>
          <div className="all-images">
            <PokeList pokemon={this.state.pokeData}/>
          </div>
        </div>
        )}
  
       
    
      </div>
    );
  }
}