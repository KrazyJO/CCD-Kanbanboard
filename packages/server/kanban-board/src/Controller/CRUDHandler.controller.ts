import { Body, Controller, Delete, Get, Post, Req } from "@nestjs/common";
import FakeDB from "../FakeDB";
import ICRUDHandler from "../interfaces/ICRUDHandler";
import Ticket from "../Model/Ticket";
import TicketList from "../Model/TicketList";
import { WSHandler } from "./../Gateway/WSHandler.gateway";


@Controller()
export class CRUDHandler implements ICRUDHandler {

    public constructor(private readonly wsHandler: WSHandler) {}

    @Post('createTicket')
    public receiveCreate(@Body() ticket: Ticket): void {
        FakeDB.getInstance().addTicket(ticket);
        this.sendUpdatesToClients()
    }

    @Post('receiveUpdate')
    public receiveUpdate(@Body() ticket: Ticket): void {
        FakeDB.getInstance().updateTicket(ticket);
        this.sendUpdatesToClients()
    }

    @Delete('receiveDelete')
    public receiveDelete(@Body() ticket: Ticket): void {
        FakeDB.getInstance().deleteTicket(ticket);
        this.sendUpdatesToClients();
    }

    @Post('receiveMove')
    public receiveMove(ticket: Ticket, command: String) {
        this.sendUpdatesToClients();
    }

    @Get('readBoardData')
    public getBoard(): TicketList {
        const db = FakeDB.getInstance();
        return db.getTicketList();
    }
    
    private sendUpdatesToClients() {
        this.wsHandler.broadcastUpdatesToClient();
    }

}