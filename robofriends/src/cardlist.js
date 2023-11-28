import React from 'react'
import Card from './robocard'

const CardList = ({robots}) =>{
    const cardsArray = robots.map((user, i)=>{
        return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
    })

    return(
        
        <div className='content-wrapper'>
      
            <div>
                {cardsArray}
            </div>
        </div>
        
    );
}

export default CardList;