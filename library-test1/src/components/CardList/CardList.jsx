import React from 'react'
import Card from '../Card/Card'

const CardList = ({rooms}) =>{
    return(
        <div className="d-flex justify-content-center align-items-center flex-column" style={{backgroundColor:'#EEEEEE', height:'auto',width:'100%'}}>
            {
                rooms.map((element,index) =>{
                    return(
                        <Card element={element} key={element.RoomId + element.Building}/>
                    )
                })
            }
        </div>
    )
}

export default CardList