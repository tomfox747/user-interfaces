import React from 'react'
import Uni from '../../assets/uniimage.jpg'

const Image = () =>{
    return(
        <div style={{width:'100%', height:'250px'}}>
            <div style={{backgroundImage:`url(${Uni})`,height:"250px", backgroundPositionY:"50%",backgroundRepeat:'no-repeat'}}></div>
        </div>
    )
}

export default Image