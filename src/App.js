import axios from 'axios';
import React from 'react';
import './App.css';

import Message from './components/Message.js';

const API = 'https://randomuser.me/api?results=10';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
    };
  }
  componentDidMount() {
    axios.get(API)
      .then(res => {
        console.log(res.data);
        this.setState({ userData: res.data.results });
      });
  }

  render() {
    const { userData } = this.state;
    return (
      <div className='App'>
        {userData.map(({ name, picture, location, id }, index) => {
          return (
            <Message
              // give away props
              name={`${name.first} ${name.last}`}
              logo={picture.thumbnail}
              title={location.country}
              text={location.city}
              key={id.value}
            />
          );
        })}

      </div>
    );
  }

}

export default App;
