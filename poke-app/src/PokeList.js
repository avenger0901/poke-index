import React, { Component } from "react";
import PokeItem from './PokeItem.js';



class PokeList extends Component {
    state={
        search:'',
    }


updateSearch(event) {
    this.setState({search:event.target.value.substr(0,20)});
      }

    render() {
    let dataArry= this.props.pokemon.filter((singleObject)=>{
        return singleObject.pokemon.indexOf(this.state.search)!== -1;
    });
    return (
        <div className="all-pokes">
            <div className="search">Search pokemon by name: 
                <input type="text" value={this.state.search} onChange={this.updateSearch.bind(this)}/>
            </div>
                {dataArry.map((singleObject,i)=>{
                return <PokeItem key={i} image={singleObject.url_image} title={singleObject.pokemon} health={singleObject.hp} ability={singleObject.ability_1}/>
                 })}       
        </div>
        );
    }
}
export default PokeList;