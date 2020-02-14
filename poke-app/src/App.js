import React,{ Component } from 'react';
import './App.css';
import Header from './Header.js';
import PokeList from './PokeList.js';
import Paging from './Paging.js';



export default class App extends Component{
  state={
    loading: false,
    pokeData:[],

  }
  async componentDidMount(){
    const url = "https://alchemy-pokedex.herokuapp.com/api/pokedex";
    let queryString = window.location.hash.slice(1);
    const URL = `${url}${queryString}`;
    const response = await fetch(URL);
    const data = await response.json();
    const totalResults = response.totalResults;
    console.log(totalResults);
    if(data.Reseponse ==="False"){
      return {
        Search:[],
        totalResults:0
      }
    }
    this.setState(
      {pokeData:data.results, 
      totalResults: totalResults,
      loading:false})
    console.log(data.results);
    console.log(this.state.pokeData);
  }
  

  render() {
    const totalResults = this.state;
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
          <Paging totalResults ={totalResults}/>
        </div>
        )}
      </div>
    );
  }
}