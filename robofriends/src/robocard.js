import React, { Component } from "react";

const Card = ({id, name, email}) =>{

    return(

        <div className="card-wrapper">
            <img alt="robot friend" src={`https://robohash.org/${id}?200x200`} />
            <div className="card">
                <h2>{name}</h2>
                <p>{email}</p>
            </div>

        </div>

    )


}
        

    


export default Card;