import React, { Component } from "react";
import PokeItem from './PokeItem.js';



class PokeList extends Component {
    render() {
    const dataArry= this.props.pokemon;
    return (
        <div className="all-pokes">
             {dataArry.map((singleObject,i)=>{
             return <PokeItem key={i} image={singleObject.url_image} title={singleObject.pokemon} health={singleObject.hp} ability={singleObject.ability_1}/>


            })}
            
                
                 
        </div>
        );
    }
}
export default PokeList;