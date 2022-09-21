export default function TicketList (props) {

  /**
   * Adapt this further to structure of
   * 
   * TicketList {
  columns: [
    Column { name: 'ToDo', tickets: [Array] },
    Column { name: 'Doing', tickets: [] },
    Column { name: 'Done', tickets: [] }
  ]

  i started in 21 - 22 but only rudimentary
}
   */
  return (
    <div className="boardList">
      {/** iterae over array only test code !! */}
      {Object.keys(props.ticketList.columns[0]).map((key, index) => { 
          return (           
            <ul key={index} className="column">
                <h3> {key} ({props.ticketList.columns[0][key].length})</h3>
                {Object.values(props.ticketList.columns[0][key]).map((value, index) => {
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