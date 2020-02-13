import React, { Component } from "react";


class PokeItem extends Component {
    render() {
        return (
            <div>
                <img  className ="image" src={this.props.image} alt="" /> 
         
         
              
            </div>
        );
    }
}
export default PokeItem;