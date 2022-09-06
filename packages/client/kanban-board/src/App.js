
import { useState, useEffect } from 'react';

import Board from './Board.jsx';

import {initWebSocket, readBoardData, closeWebSocket} from './WebSocketHandler';

import './App.css';


function App() {

  const [ticketList, setTicketList] = useState(undefined); 
  const [selectedTicket, selectTicket] = useState(0); 


    useEffect(() => {
        function handleTicketListChange(list) {
            console.log(ticketList);
            setTicketList(list);
        }
        // not implemented yet - read the board data initial when the websocket 
        // ins't initialized too
        let initSuccess = initWebSocket(handleTicketListChange);
        if (!initSuccess) {
            // think about retry websocket init atm we fetch the mocked data 
            readBoardData(handleTicketListChange);
        } else {
            //readBoardData(handleTicketListChange);
        }
        // Specify how to clean up after this effect:
        // return function cleanup() {
        //   closeWebSocket();
        // };
        // console.log("effekt");
    }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>KANBAN BOARD CC Seminar</p>
      </header>
        {ticketList && /** without a ticketlist (Housseyn Taks) i assume the first ticket in to as selected */
          <Board 
            ticketList={ticketList}
            selectedTicket={selectedTicket || ticketList.toDo[0]}
            selectTicket={selectTicket} />
        }
        
    </div>
  );
}

export default App;
