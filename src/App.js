import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Form from './components/Form'
import List from './components/List'


class App extends Component {

  state={
    user:''
  }

  infos=(user)=>{
    // console.log(user);
    this.setState({
      user:user
    })
  }

  render(){
    return (
      <div className="container">
        <Header />
        <Form infos={this.infos}/>
        <List user={this.state.user}/>
      </div>
    );
  }
}

export default App;
