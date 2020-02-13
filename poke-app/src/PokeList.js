import React, { Component } from "react";
import PokeItem from './PokeItem.js';



class PokeList extends Component {
    render() {
    const dataArry= this.props.pokemon;
    return (
        <div>
             {dataArry.map((singleObject,i)=>{
             return <PokeItem key={i} image={singleObject.url_image} title={singleObject.pokemon} health={singleObject.hp} ability={singleObject.ability_1}/>


            })}
            
        <PokeItem/> 
                
                 
        </div>
        );
    }
}
export default PokeList;