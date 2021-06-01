import React from 'react';
import TableHeading from './components/TableHeading';
import EmployeeTable from './components/EmployeeTable';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import Form from './components/Form'
import Button from './components/SortButton';
import API from "./utils/API";

class App extends React.Component {
  state = {
    employees: [],
    search: '',
    filteredEmployees: []
  };

  componentDidMount() {
    this.populateTable()
  };

  populateTable = () => {
    API.populate()
      .then(res => {
        this.setState({ 
          employees: res.data.results,
          filteredEmployees: res.data.results
         })
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    const filteredEmployees = this.state.employees.filter(employee => employee.name.first.toLowerCase().startsWith(value.toLowerCase()) || employee.name.last.toLowerCase().startsWith(value.toLowerCase()));
    this.setState({
      [name]: value,
      filteredEmployees: filteredEmployees
    });
  };

  sort = () => {
    const employees = this.state.employees.sort((a, b) => (`${a.name.first} ${a.name.last}`>`${b.name.first} ${b.name.last}`) ? 1: -1);
    this.setState({ filteredEmployees: employees });
  }

  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        <Form handleInputChange={this.handleInputChange} value={this.state.search} />
        <Button sort={this.sort} />
        <TableHeading />
        {this.state.filteredEmployees.map(employee => (
          <EmployeeTable
            id={employee.login.uuid}
            key={employee.login.uuid} // not a prop
            name={ `${employee.name.first} ${employee.name.last}` } 
            image={employee.picture.medium} 
            email={employee.email}
            phone={employee.phone}
            dob={employee.dob.date} // fix
          />
        ))}
      </Wrapper>
    );
  };
}

export default App;


// Class Component
// - manages state
// - uses the "this" keyword often
// - object
// - uses a render() function around the return of jsx
// similar to your classes back in module 10
// needs to extend React.Component

// Functional Component
// - does not manage state
// - only returns JSX

// State
// - anything that is changing inside your app
// - kinda like variables

// const animals = ["dog", "cat", "bird"]



// const newAnimals = []
// for (let i = 0; i < animals.length; i++) {
//   const animal = animals[i]
//   newAnimals.push(animal.toUpperCase());
// }




// const newAnimals = animals.map(animal => animal.toUpperCase())



// Sorting
// google how to sort array by property in object (flaviocopes.com)


