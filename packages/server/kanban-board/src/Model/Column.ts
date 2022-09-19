import Ticket from "./Ticket";

class Column {
    public name: String;
    public tickets: Ticket[];

    public constructor(name: String) {
        this.name = name;
        this.tickets = [];

        
    }
}

export default Column;