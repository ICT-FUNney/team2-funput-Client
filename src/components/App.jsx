import React from 'react';
import Header from './Areas/Header';
import Home from './Pages/Home';
import '../styles/App.css'

class App extends React.Component {
  render() {
    return (
      <div id="container">
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;
