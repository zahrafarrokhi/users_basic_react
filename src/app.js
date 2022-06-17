import React, { Component } from 'react';
import Users from './components/users';
import Navbar from './components/navbar';

class App extends React.Component {
  render() { 
    return <>
      <Navbar />
      <div className='container mt-3'>
        <Users/>
      </div>
    </>
  }
}
 
export default App;