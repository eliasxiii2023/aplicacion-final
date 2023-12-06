import './App.css';
import { Auth } from './components/Auth';
import { useState, useRef } from 'react';
import Cookies from 'universal-cookie';
import {Chat} from "./components/Chat";
import {Room} from "./components/Room";

const cookies = new Cookies();

function App() {

  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"))
  const [room, setRoom] = useState(null)

  const roomInputRef = useRef(null);
  if(!isAuth){
    return ( <div> <Auth setIsAuth = {setIsAuth}  /> </div> );
  }

  return <div> {room ? ( 
  <div> < Chat room={room} /> </div>
  ) : ( <div className='room'>
    <label> Ingresa el nombre del chat</label>
    <input ref={roomInputRef}/>
    <button onClick={() => setRoom(roomInputRef.current.value)}> Enter Chat </button>
     </div> )} 
     </div>
}

export default App;
