import './App.css';
import Board from './Board.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>KANBAN BOARD CC Seminar</p>
      </header>
        {/** fill with data from websocket */}
        <Board 
          ticketList={"List"} 
          ticketText={"nothing selected"} />
    </div>
  );
}

export default App;
