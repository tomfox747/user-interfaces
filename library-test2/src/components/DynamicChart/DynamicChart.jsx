import React, {useState, useEffect} from 'react'
import {LineChart} from 'react-chartkick'
import 'chart.js'

const testData={
    
}

const DynamicChart = ({currentPopulation,element}) =>{
    const [dataValues, setDataValues] = useState([]);
    const [chartData, setChartData] = useState({
        1:0,
        2:0,
        3:0,
        4:0,
        5:0,
        6:0,
        7:0,
        8:0,
        9:0,
        10:0,
    });

    useEffect(() =>{
        let newData = {}
        for(var index = 0; index < dataValues.length; index++){
            newData[index] = dataValues[index]
        }
        setChartData(newData);
    },[dataValues])

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
            <LineChart data={chartData}/>
        </div>
    )
}

/**
 * dataValues.map((value,index) =>{
                    return(
                        <div className="ml-2" key={'dataValues'+index}>
                            {value}
                        </div>
                    )
                })
 * 
 */

export default DynamicChart