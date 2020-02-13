import React, { Component } from "react";


class PokeItem extends Component {
    render() {
        return (
            <div className="poke-image">
                    <img  className ="image" src={this.props.image} alt="" /> 
            <div className="poke-details">
                <div>hp: {this.props.health}</div>
                <div>ability: {this.props.ability}</div>
                <div>pokemon: {this.props.title}</div>
            </div>
         
         
              
            </div>
        );
    }
}
export default PokeItem;