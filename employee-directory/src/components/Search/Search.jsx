import React from "react";
import "./style.css";
import { Component } from "react";

class Search extends Component {
    constructor(props) {
        super (props);

        this.state = { 
            nameFilter: ""
        };
    }

    handleInputChange = event => {
        let nameFilter = event.target.value;

        this.setState({
            nameFilter
        });

        this.props.handleInputChange(nameFilter);
    }

    render() {
        return (
            <div>
                <input 
                type="text"
                value={this.state.nameFilter}
                onChange={this.handleInputChange}
                id="Search"></input>
            </div>
        )
    }
    
}

export default Search;