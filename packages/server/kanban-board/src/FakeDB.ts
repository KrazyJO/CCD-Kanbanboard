import Column from "./Model/Column";
import { Columns } from "./Model/Enums";
import Ticket from "./Model/Ticket";
import TicketList from "./Model/TicketList";

class FakeDB {
    
    private static instance: FakeDB;
    private myModel: TicketList;

    private constructor() {
        this.setupDB();
    }

    public static getInstance(): FakeDB {
        if (!FakeDB.instance) {
            FakeDB.instance = new FakeDB();
        }

        return FakeDB.instance;
    }

    private setupDB(): void {
        const ticketList = new TicketList();
        const colToDo = new Column('ToDo');
        const colDoing = new Column('Doing');
        const colDone = new Column('Done');

        const ticket1 = new Ticket();
        ticket1.id = 0;
        ticket1.positionInColumn = 0;
        ticket1.titel = 'Ticket 1';
        ticket1.text = 'As a dev\nI want to create a new ticket\nso that I can move it into the next column.';

        const ticket2 = new Ticket();
        ticket2.id = 1;
        ticket2.positionInColumn = 1;
        ticket2.titel = 'Ticket 2';
        ticket2.text = 'As a dev\nI want to create a second ticket\nso that I can play around with it.';

        colToDo.tickets.push(ticket1);
        colToDo.tickets.push(ticket2);

        ticketList.columns.push(colToDo);
        ticketList.columns.push(colDoing);
        ticketList.columns.push(colDone);

        this.myModel = ticketList;
    }

    public getTicketList(): TicketList {
        return this.myModel;
    }

    public addTicket(ticket: Ticket) {
        const position = this.myModel.columns[0].tickets.length;
        const newId = this.getNewId();
        ticket.positionInColumn = position;
        ticket.id = newId;
    }

    public getNewId(): number {
        let id = 0;
        for (const column of this.myModel.columns) {
            for (const ticket of column.tickets) {
                if (ticket.id > id) {
                    id = ticket.id + 1;
                }
            }
        }
        return id;
    }

    getNewPositionForTicketInColumn(column: Columns) {
        return this.myModel.columns[column].tickets.length || 0;
    }

    indexOfColumn(name: String): number {
        switch(name) {
            case 'ToDo':
                return Columns.ToDo;
            case 'Doing':
                return Columns.Doing;
            case 'Done':
                return Columns.Done;
            default:
                throw new Error("NotExisting");
        }
    }

    public updateTicket(ticket: Ticket) {
        const persisted = this.findTicketById(ticket.id);
        this.persistTicketAttributes(persisted, ticket);
    }

    public findAllTicketInToDo(): Ticket[] {
        return this.myModel.columns[Columns.ToDo].tickets;
    }

    public delete(ticketToDelete: Ticket) {
        let removedPosition: number;
        for (const column of this.myModel.columns) {
            for (let i = 0; i < column.tickets.length; i++) {
                const ticket = column.tickets[i];
                if (this.isSameId(ticket, ticketToDelete)) {
                    removedPosition = ticket.positionInColumn;
                    this.removeTicket(column, i);
                    this.updatePositions(column, removedPosition);
                    return;
                }
            }
        }        
    }
    
    updatePositions(column: Column, removedPosition: any) {
        for (const ticket of column.tickets) {
            if (ticket.positionInColumn > removedPosition) {
                ticket.positionInColumn--;
            }
        }
    }

    private removeTicket(column: Column, i: number) {
        column.tickets.splice(i, 1);
    }

    private isSameId(ticket: Ticket, ticketToDelete: Ticket) {
        return ticket.id === ticketToDelete.id;
    }

    persistTicketAttributes(persisted, ticket) {
        persisted.text = ticket.text;
        persisted.titel = ticket.titel;
    }

    findTicketById(id: number): Ticket {
        for (const column of this.myModel.columns) {
            for (const ticket of column.tickets) {
                if (ticket.id === id) {
                    return ticket;
                }
            }
        }

        throw new Error('NotExisiting');
    }
    
}

export default FakeDB;