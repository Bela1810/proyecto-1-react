import React from 'react'
import '../style-sheets/helloworld.css'


export const Helloworld = (props) => {
    return(
        <div className='container-testimony'>
            <img className= 'image-testimony' 
                src={`src/images/${props.picture}.jpg`}
                alt='Fearless Era'/>
            <div className='container-text-testimony'>
                <p className='name-testimony'>{props.era}</p>
                <p className='year-testimony'>{props.year}</p>
                <p className='text-testimony'>"{props.testimony}"</p>

            </div>
        </div>
    )
    
}

export default Helloworld
