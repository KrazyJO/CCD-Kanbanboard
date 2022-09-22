import TicketList from './TicketList';
import ControlArea from './ControlArea';

export default function Board (props) {

    console.log("selectedTicket: " + props.selectedTicket)
    const ticketText = props.newTicketText? props.newTicketText : props.selectedTicket.text;

    return (
        <div className="board">
            <div className="ticketList">
                <TicketList ticketList={props.ticketList} ticketSelection={props.selectTicket} selectedTicket={props.selectedTicket} />
            </div>
            <div className="controlArea">
               {props.ticketList &&
                    <ControlArea
                        selectedTicket={props.selectedTicket}
                        ticketTextNew={props.newTicketText? true : false} 
                        ticketText={ticketText}
                        inputChange={props.inputChange} />
               }
            </div>
        </div>
    )
}