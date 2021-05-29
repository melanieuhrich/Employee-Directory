import React from 'react';
import EmployeeCard from './components/EmployeeCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import API from "./utils/API";

class App extends React.Component {
  state = {
    employees: [],
  }

  componentDidMount() {
    this.populateTable()
  }

  populateTable = () => {
    API.populate()
      .then(res => {
        console.log(res);
        this.setState({ employees: res.data.results })
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Wrapper>
        <Title>Employee List</Title>
        {this.state.employees.map(employee => (
          <EmployeeCard
            id={employee.id}
            key={employee.id} // not a prop
            name={employee.name} // fix
            image={employee.image} // fix
            email={employee.email}
            phone={employee.phone}
            dob={employee.dob} // fix
          />
        ))}
      </Wrapper>
    );
  }
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

// Filtering through the users (aka searching by name)
// Activity 17 of the react week

// Sorting
// google how to sort array by property in object (flaviocopes.com)
