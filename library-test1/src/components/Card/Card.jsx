import React,{useState,useEffect} from 'react'
import increase from '../../assets/increase.png'
import decrease from '../../assets/decrease.png'
import equal from '../../assets/equal.png'

const Card = ({element}) =>{
    const population = element.CurrentPopulation
    const [previousPopulation, setPreviousPopulation] = useState(0)
    const [populationChange,setPopulationChange] = useState(0)

    useEffect(() =>{
        console.log("element updated")
        if(previousPopulation < population){
            setPopulationChange(1)
        }
        if(previousPopulation === population){
            setPopulationChange(0)
        }
        if(previousPopulation > population){
            setPopulationChange(-1)
        }
        setPreviousPopulation(population)
    },[element.CurrentPopulation])

    return(
        <div className="mt-4" style={{height:"200px",width:"80%"}}>
            <div className="pl-4 d-flex align-items-center" style={{backgroundColor:'#E3E3E3',height:'20%',borderRadius:'7px 7px 0px 0px',border:'solid black 0.5px', borderColor:'#909090'}}>
                {element.RoomId}
            </div>
            <div className="d-flex justify-content-start align-items-center p-5" style={{height:"auto", backgroundColor:'white',borderRadius:'0px 0px 7px 7px',border:'solid black 0.5px',borderTopStyle:'none', borderColor:'#909090'}}>
                <div className="ml-5 d-flex align-items-center" style={{backgroundColor:'#EFEFEF', width:'400px',height:'70px', borderRadius:'7px'}}>
                    <div className="ml-4">Current Population : {element.CurrentPopulation}</div>
                    <div className="d-flex justify-content-center align-content-center ml-5">
                        <img style={{width:'30px'}} src={populationChange === -1 ? decrease : populationChange === 0 ? equal : increase}/>    
                    </div>
                    <div className="ml-2">
                        {element.CurrentPopulation}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card