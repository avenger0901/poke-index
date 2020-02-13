import React, { Component } from "react";


class PokeItem extends Component {
    render() {
        return (
            <div className="poke-image">
                <div className="all-images">
                    <img  className ="image" src={this.props.image} alt="" /> 
                </div>
                <div>{this.props.health}</div>
                <div>{this.props.ability}</div>
                <div>{this.props.title}</div>
         
         
              
            </div>
        );
    }
}
export default PokeItem;