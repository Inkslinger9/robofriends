import React from "react";

const SearchBox = ({searchfield, searchChange}) =>{
    return (
        <div className="pa2" style={{padding: 0}}>
            <input type="search" placeholder="Search Robots" className="pa3 ba b--green bg-lightest-blue" onChange={searchChange}>
            
            </input>
        </div>
           
    )
}

export default SearchBox;