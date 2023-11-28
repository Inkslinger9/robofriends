import React, { Component } from "react";
import CardList from './cardlist'
import {robots} from './robots'
import SearchBox from './searchbox'

class App extends Component{
    constructor (){
        super();
        this.state ={
            robots: robots,
            searchfield: ''
        }
    }



    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }

    render(){

        const filteredRobots = this.state.robots.filter((robot) => {
            return (
                robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
            );
       })

        return (
            <div className="tc">
                <h1 id="text" className="text-pop-up-top">RoboFriends</h1>
                <SearchBox searchChange ={this.onSearchChange} />
                <CardList robots ={filteredRobots} />
            </div>
        );

    }

   
}


export default App;