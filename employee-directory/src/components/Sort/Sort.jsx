import React from "react";
import { Component } from "react";

class Sort extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            sortBy: "default"
        };
    };

    handleInputChange = event => {
        let sortBy = event.target.value;
        console.log(sortBy);
        this.setState({
            sortBy
        });
        this.props.handleInputChange(sortBy);
    };

    render() {
        return (
            <select onChange={this.handleInputChange}>
                <option value="default">None</option>
                <option value="name">Name</option>
            </select>
        )
    }
};

export default Sort;