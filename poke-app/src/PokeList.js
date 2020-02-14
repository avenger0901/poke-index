import React, { Component } from "react";
import PokeItem from './PokeItem.js';



class PokeList extends Component {
    state={
        search:'',
    }
    handleSubmit = event => {
        const form = document.querySelector("form");
        event.preventDefault();
        const formData = new FormData(form);
    
        const queryString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(queryString);
    
        searchParams.set("pokemon", formData.get("search"));
        //reset to page 1 as this is new search and
        //we don't know how many pages
        searchParams.set("page", 1);
    
        window.location.hash = searchParams.toString();
     };

    updateSearch(event) {
        this.setState({search:event.target.value.substr(0,20)});
        }

        render() {
         return (
             <div className="all-pokes">
        <form onSubmit={this.handleSubmit}>
            <div className="search">Search pokemon by name: 
                <input id="search" name="search" type="text" value={this.state.search} onChange={this.updateSearch.bind(this)} placeholder="Search here..."/>
            </div>
                {this.props.pokemon.map((singleObject,i)=>{
                return <PokeItem key={i} image={singleObject.url_image} title={singleObject.pokemon} health={singleObject.hp} ability={singleObject.ability_1}/>
                 })}  
        </form>     
        </div>
        );
    }
}
export default PokeList;