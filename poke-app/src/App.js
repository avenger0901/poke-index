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
    console.log(queryString);
    const URL = `${url}?${queryString}`;
    const response = await fetch(URL);
    const data = await response.json();
    const totalCount = response.totalCount;
    console.log(totalCount);
    if(data.Reseponse ==="False"){
      return {
        Search:[],
        totalCount:0
      }
    }
    this.setState(
      {pokeData:data.results, 
      totalCount:data.count ,
      loading:false})

    window.addEventListener("hashchange", async () => {
      const url = "https://alchemy-pokedex.herokuapp.com/api/pokedex";
    let queryString = window.location.hash.slice(1);
    console.log(queryString);
    const URL = `${url}?${queryString}`;
    const response = await fetch(URL);
    const data = await response.json();
    const totalCount = response.totalCount;
    console.log(totalCount);
    if(data.Reseponse ==="False"){
      return {
        Search:[],
        totalCount:0
      }
    }
    this.setState(
      {pokeData:data.results, 
      totalCount:data.count ,
      loading:false})
    });
  }
  

  render() {
    const totalCount = this.state.totalCount;
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
          <Paging totalCount ={totalCount}/>
        </div>
        )}
      </div>
    );
  }
}