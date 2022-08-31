import TicketList from './TicketList'
import ControlArea from './ControlArea'

export default function Board (props) {

    return (
        <div className="board">
            <div className="ticketList">
                <TicketList ticketList={props.ticketList} />
            </div>
            <div className="controlArea">
               <ControlArea ticketText={props.ticketText}/>
            </div>
        </div>
    )
}