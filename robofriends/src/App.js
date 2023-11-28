import React, { Component } from "react";
import CardList from './cardlist'
import SearchBox from './searchbox'
import Scroll from './Scroll'
import ErrorBoundry from "./ErrorBoundry";

class App extends Component{
    constructor (){
        super();
        this.state ={
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> {return  response.json();})
        .then(users=>{ this.setState({robots: users})})
        
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

                <Scroll>
                    <ErrorBoundry>
                     <CardList robots ={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
               
            </div>
        );

    }

   
}


export default App;