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
    public getBoard(): any{
        const db = FakeDB.getInstance();
        console.log(db.getTicketList());
        //return db.getTicketList();
        const ticketList = {
            "toDo": [
                {
                    text: "Test Do Text",
                    positionInColumn: "1",
                    id: "1"
                },
                {
                    text: "Test Do Text 2",
                    positionInColumn: "2",
                    id: "4"
                },
                {
                    text: "Test Do Text 3",
                    positionInColumn: "3",
                    id: "5"
                },
                {
                    text: "WS Ticket",
                    positionInColumn: "4",
                    id: "6"
                }
            ],
            "doing": [
                {
                    text: "Test Doing",
                    positionInColumn: "1",
                    id: "2"
                }
            ],
            "done": [
                {
                    text: "Test Done",
                    positionInColumn: "1",
                    id: "3"
                }
            ],
        }
        return ticketList;
    }
    
    private sendUpdatesToClients() {
        this.wsHandler.broadcastUpdatesToClient();
    }

}