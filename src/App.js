import React from 'react';
import FriendCard from './components/FriendCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import friends from './friends.json';

class App extends React.Component {
  state = {
    friends: friends,
  }

  removeFriend = (id) => {
    const friends = this.state.friends.filter(friend => friend.id !== id);

    this.setState({
      friends: friends,
    })
  }

  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id} // not a prop
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
            removeFriend={this.removeFriend}
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

