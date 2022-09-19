
import { useState, useEffect, useRef } from 'react';

import Board from './Board.jsx';

import {initWebSocket, closeWebSocket} from './WebSocketHandler';

import ApiCallHandler from './ApiCallHandler';

import './App.css';

let wsInit = false;

function App() {

  const [ticketList, setTicketList] = useState(undefined); 
  const [selectedTicket, selectTicket] = useState(0); 

  const [newTicketText, setNewTicketText] = useState(undefined);

  // WS 
  const wsRef = useRef();
  const [connected, setConnected] = useState(false);


  useEffect(() => {
              
    if (!wsInit) {
      wsInit = initWebSocket(handleTicketListChange, setConnected, wsRef);
    }

    // using of async functions in useEffekt is little tricky 
    // the APicallHandler was the first approach, not lucky about giving the callback function
    // in the fn call, testing is bad.
    ApiCallHandler.readBoardData(handleTicketListChange);
    
    // this approach isn't much better maybe there is time to make it better
    // const fetchData = async () => {
    //   const res = await fetch("/readBoardData");
    //   // const data = await res.json();
    //   return res.json();
    //   // handleTicketListChange(data.ticketList);
    // }
    // const ticketList = async () => {
    //   const list = await fetchData();
    //   handleTicketListChange(list.ticketList);
    // }
    // ticketList();
    console.log("effekt");
  }, []);

  function handleTicketListChange(list) {
    console.log(list);
    setTicketList(list);
  } 

  function inputChange(evt) {
    setNewTicketText(evt.target.value);
    // console.log("New Ticket: " + evt.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className={connected? "connected" : "disconnected"}>KANBAN BOARD CC Seminar</div>
      </header>
        {ticketList && /** without a ticketlist (Housseyn Taks) i assume the first ticket in to as selected */
          <Board 
            ticketList={ticketList}
            selectedTicket={selectedTicket || ticketList.toDo[0]}
            newTicketText={newTicketText}
            selectTicket={selectTicket} 
            inputChange={inputChange}/>
        }
        
    </div>
  );
}

export default App;
