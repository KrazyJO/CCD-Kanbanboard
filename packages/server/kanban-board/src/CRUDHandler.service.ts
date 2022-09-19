import { Injectable } from "@nestjs/common";
import FakeDB from "./FakeDB";
import Ticket from "./Model/Ticket";

@Injectable()
class TicketHandler {

    public addNewTicket(ticket: Ticket): void {
        FakeDB.getInstance().addTicket(ticket);
    }
} 

export default TicketHandler;