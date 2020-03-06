import React, { Component } from "react";
import Header from "./components/Header/Header"
import Info from "./components/Info/Info";
import InfoContainer from "./components/InfoContainer/InfoContainer";
import employees from "./employees.json";

class App extends Component {
 
  state = {
    employees
  };

  filterEmployee = id => {
    
    const employees = this.state.employees.filter(employee => employee.id !== id);
    
    this.setState({ employees });
  };
  
  render() {
    return (
      <InfoContainer>
        <Header>Employee Directory</Header>
        {this.state.employees.map(employee => (
          <Info
            filterEmployee={this.filterEmployee}
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
    );
  }
}

export default App;
