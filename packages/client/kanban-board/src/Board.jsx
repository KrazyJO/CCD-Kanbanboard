import TicketList from './TicketList';
import ControlArea from './ControlArea';

export default function Board (props) {

    return (
        <div className="board">
            <div className="ticketList">
                <TicketList ticketList={props.ticketList} ticketSelection={props.selectTicket} selectedTicket={props.selectedTicket} />
            </div>
            <div className="controlArea">
               {props.ticketList &&
                    <ControlArea
                        ticketTextNew={props.newTicketText? true : false} 
                        ticketText={props.newTicketText? props.newTicketText : props.selectedTicket.text}
                        inputChange={props.inputChange} />
               }
            </div>
        </div>
    )
}