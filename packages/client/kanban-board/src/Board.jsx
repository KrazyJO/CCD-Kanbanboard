import TicketList from './TicketList';
import ControlArea from './ControlArea';

export default function Board (props) {

    return (
        <div className="board">
            <div className="ticketList">
                <TicketList ticketList={props.ticketList} />
            </div>
            <div className="controlArea">
               {props.ticketList &&
                <ControlArea ticketText={props.selectedTicket.text}/>
               }
            </div>
        </div>
    )
}