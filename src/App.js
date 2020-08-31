import axios from 'axios';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
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
      <Router>
        <nav className="navigation">
          <ul className="navigation-list">

            <li>
              <Link to="/" className="navigation-link">Home</Link>
            </li>

            <li>
              <Link to="/hello" className="navigation-link">Hello</Link>
            </li>


            <li>
              <Link to="/signin" className="navigation-link">Sign in</Link>
            </li>

          </ul>
        </nav>
        <Switch>
          <Route path="/" exact>
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
          </Route>
          <Route path="/hello">Hello</Route>
          <Route path="/signin">I am registrator</Route>
        </Switch>

      </Router >
    );
  }

}

export default App;
