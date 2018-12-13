import React, { Component } from 'react';
import Navbar from './components/navbar';
import Counters from './components/counters';
import './App.css';


class App extends Component {
  state = {
    counters : [
      { id: 1 , value: 4 },
      { id: 2 , value: 0 },
      { id: 3 , value: 0 },
      { id: 4 , value: 0 }
    ]
  }
  constructor(){
    super();
    console.log('App-Constructor');
  }
  componentDidMount(){
    console.log('App-Mounted');
  }
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({ counters});
  }
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState(counters);
  }
  handleDelete = (counterID) => {
    const counters = this.state.counters.filter(c=> c.id !== counterID);
    this.setState({counters : counters});
  }
  render() {
    return (
      <React.Fragment>
        <Navbar totalCounters = {this.state.counters.filter(c => c.value > 0).length}/>
        <main className ="cointer">
          <Counters 
              counters = {this.state.counters}
              onDelete = {this.handleDelete}
              onIncremnet = {this.handleIncrement}
              onReset = {this.handleReset}
          />
        </main>
      </React.Fragment>
      
    );
  }
}

export default App;
