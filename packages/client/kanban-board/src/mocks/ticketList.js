// Static mock data holder as singleton 
export class TicketListClass {

    static instance;

    ticketList = {
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

    static getInstance() {
        if (TicketListClass.instance) return TicketListClass.instance;

        TicketListClass.instance = new TicketListClass();

        return TicketListClass.instance;
    }
}
