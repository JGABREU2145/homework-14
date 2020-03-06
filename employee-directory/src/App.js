import React, { Component } from "react";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Sort from "./components/Sort/Sort"
import Info from "./components/Info/Info";
import InfoContainer from "./components/InfoContainer/InfoContainer";
import employees from "./employees.json";

class App extends Component {
 
  state = {
    employees,
    filteredEmployees: employees
  };

  filterEmployees = searchString => {    
    let filteredEmployees = this.state.employees.filter(employee => {
      let name = employee.name.toLowerCase();
      return name.indexOf(searchString.toLowerCase()) > -1;
    });
    this.setState({
      filteredEmployees
    });
  };

  sortEmployees = sortBy => {
    let filteredEmployees = this.state.filteredEmployees;
    filteredEmployees.sort(function(a, b) {
      var valueA, valueB;
      if(sortBy == "name") {
        valueA = a.name.toLowerCase();
        valueB = b.name.toLowerCase()
      } 
      else {
        valueA = a.userId;
        valueB = b.userId;
      }
      
      if (valueA < valueB) {
        return -1;
      }
      if (valueA > valueB) {
        return 1;
      }
      return 0;
    });
    console.log(sortBy);
    this.setState({
      filteredEmployees
    });
  }
  
  render() {
    return (
      <div>
      <InfoContainer>
        <Header>Employee Directory</Header>
        <Search handleInputChange={this.filterEmployees}/>
        <Sort handleInputChange={this.sortEmployees}/>
        {this.state.filteredEmployees.map(employee => (
          <Info
            id={employee.userId}
            key={employee.userId}
            name={employee.name} 
            image={employee.image}
            phone={employee.phone}
            email={employee.email}
            dob={employee.dob}
          />
        ))}
      </InfoContainer>
      </div>
    );
  }
}

export default App;
