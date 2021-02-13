import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header/Header'
import Image from './components/Image/Image'
import CardList from './components/CardList/CardList'
import axios from 'axios'

function App() {
  const[rooms,setRooms] = useState([])

  useEffect(() =>{
    axios.get('http://localhost:8080/web/data/get_rooms_by_building_id?buildingId=3')
      .then((res) =>{
        setRooms(res.data.data);
        repeatRoomCall();
      }).catch((err) =>{
        console.log(err);
        repeatRoomCall();
      })
    repeatRoomCall();
  },[])

  const repeatRoomCall = () =>{
    setTimeout(() =>{
      axios.get('http://localhost:8080/web/data/get_rooms_by_building_id?buildingId=3')
      .then((res) =>{
        setRooms(res.data.data);
        repeatRoomCall();
      }).catch((err) =>{
        console.log(err);
        repeatRoomCall();
      })
    },3000)
  }

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <Header/>
      <Image/>
      <CardList rooms={rooms}/>
    </div>
  );
}

export default App;
