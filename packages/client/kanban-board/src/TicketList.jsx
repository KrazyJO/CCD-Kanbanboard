/** have fun housseyn */

export default function TicketList (props) {
    
    var ticktList = props.ticketList;

    function onItemClickHandler(evt) {
        console.log(evt.currentTarget.textContent);
    }

      return (
        <div className="boardList">
          {Object.keys(ticktList).map((key, index) => { 
              return (           
                <ul key={index} className="column">
                    <h3> {key} ({ticktList[key].length})</h3>
                    {Object.values(ticktList[key]).map((value, index) => {
                        return (
                            <li key={value.id} onClick={onItemClickHandler} className="listItems">
                                <div>{value.text}</div>
                            </li>  
                        );                
                    })}
                </ul>
                 );
          })}
        </div>
      );
}