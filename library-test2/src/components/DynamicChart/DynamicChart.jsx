import React, {useState, useEffect} from 'react'

const DynamicChart = ({currentPopulation,element}) =>{
    const [dataValues, setDataValues] = useState([]);

    useEffect(() =>{
        if (dataValues.length === 10){
            let values = [...dataValues];
            values.shift()
            values.push(currentPopulation);
            setDataValues(values);
        }else{
            setDataValues([...dataValues, currentPopulation])
        }
    },[element])

    return(
        <div className="d-flex">
            {
                dataValues.map((value) =>{
                    return(
                        <div className="ml-2">
                            {value}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DynamicChart