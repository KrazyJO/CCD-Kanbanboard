import { Move } from "./../Model/Enums";
import Ticket from "./../Model/Ticket";

interface ICRUDHandler {
    receiveCreate(ticket: Ticket): void;
    receiveUpdate(ticket: Ticket): void;
    receiveDelete(ticket: Ticket): void;
    receiveMove(ticket: Ticket, command: Move): void;
}

export default ICRUDHandler;