
import { useState, useEffect } from 'react';
import Board from './Board.jsx';
import {initWebSocket, closeWebSocket} from './WebSocketHandler';
import ApiCallHandler from './ApiCallHandler';
import './App.css';

let wsInit = false;

function App() {

  const [ticketList, setTicketList] = useState(undefined); 
  const [selectedTicket, selectTicket] = useState(0); 
  const [newTicketText, setNewTicketText] = useState(undefined);
  const [connected, setConnected] = useState(false);

  useEffect(initBoard, []);

  function initBoard() {
    if (!wsInit) {
      const socket = initWebSocket();
      wsInit = true;
      addSocketEvents(socket);
    }
    ApiCallHandler.readBoardData(handleTicketListChange);
  }

  function addSocketEvents(socket) {
    socket.on("events", (data) => setTicketList(data) );
  }

  function handleTicketListChange(list) {
    console.log(list);
    setTicketList(list);
  } 

  function inputChange(evt) {
    setNewTicketText(evt.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className={connected? "connected" : "disconnected"}>KANBAN BOARD CC Seminar</div>
      </header>
        {ticketList && /** without a ticketlist (Housseyn Taks) i assume the first ticket in to as selected */
          <Board 
            ticketList={ticketList}
            selectedTicket={selectedTicket || ticketList.columns[0].name}
            newTicketText={newTicketText}
            selectTicket={selectTicket} 
            inputChange={inputChange}/>
        }
        
    </div>
  );
}

export default App;
