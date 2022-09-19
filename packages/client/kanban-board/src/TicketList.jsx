export default function TicketList (props) {

  return (
    <div className="boardList">
      {Object.keys(props.ticketList).map((key, index) => { 
          return (           
            <ul key={index} className="column">
                <h3> {key} ({props.ticketList[key].length})</h3>
                {Object.values(props.ticketList[key]).map((value, index) => {
                    return (
                        <li id={value.id} key={value.id} onClick={() => props.ticketSelection(value)} className="listItems">
                            <div className={value === props.selectedTicket ? "selected" : ""}>{value.text}</div>
                        </li>  
                    );                
                })}
            </ul>
              );
      })}
    </div>
  );
}