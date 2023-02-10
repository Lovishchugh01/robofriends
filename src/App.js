import React, { Component } from 'react'
// import './App.css';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: [],
      searchfield:''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.cypress.io/users')
      .then(response => {
        return response.json();
      })
      .then( users => {
        this.setState({robots:users})
      })
  }

  onSearchChange = (e) => {
    this.setState({ searchfield: e.target.value})
    
    // console.log(filterRobots)
  }
  render() {
    const {robots, searchfield} = this.state;
    const filterRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    if(robots.length === 0){
      return <h2 className='f1 tc'>Loading</h2>
    }
    else{
      return (
        <div className="App tc">
        <h1>Welcome</h1>
        <SearchBox searchChange = {this.onSearchChange}/>
        <hr />
        <Scroll>
          <CardList robots = {filterRobots} />
        </Scroll>
      </div>
      )
    }
    
  }
}