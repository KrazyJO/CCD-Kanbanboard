import { Body, Controller, Delete, Get, Post, Req } from "@nestjs/common";
import FakeDB from "./FakeDB";
import Ticket from "./Model/Ticket";
import TicketList from "./Model/TicketList";


@Controller()
export class CRUDHandler {

    @Post('receiveCreate')
    public receiveCreate(@Body() ticket: Ticket): Ticket {
        FakeDB.getInstance().addTicket(ticket);
        //Persistance->persist
        // return true;
        return ticket;
    }

    @Post('receiveUpdate')
    public receiveUpdate(ticket: Ticket): void {
        FakeDB.getInstance().updateTicket(ticket);
    }

    @Delete('receiveDelete')
    public receiveDelete(ticket: Ticket): void {
        Fak
    }

    @Post('receiveMove')
    public receiveMove(ticket: Ticket, command: String) {

    }

    @Get('readBoardData')
    public getBoard(): TicketList {
        const db = FakeDB.getInstance();
        return db.getTicketList();
    }
    

}