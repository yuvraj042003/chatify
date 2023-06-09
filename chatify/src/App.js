import socketIO from "socket.io-client"
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom' 
import Join from "../src/Join/Join.js" 
const ENDPOINT='http://localhost:4500/'
const socket = socketIO(ENDPOINT, {transports:['websocket']}) 

function App() {

  socket.on("connect",()=>{

  })


  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route extact path="/" element={<Join/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
