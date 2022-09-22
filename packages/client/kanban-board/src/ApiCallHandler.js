import TicketDTO from "./TicketDTO";

export default class ApiCallHandler {
    static readBoardData(handleTicketListChange) {
        const url = this.buildUrl("/readBoardData");
        this.fetchData(url, handleTicketListChange);
    }

    static buildUrl(alias) {
        const base = "http://localhost:3000";
        return base + alias;
    }

    static createTicket(ticket) {
        const ticketDTO = new TicketDTO(ticket.ticketText);
        const url = ApiCallHandler.buildUrl("/createTicket");
        ApiCallHandler.postData(url, ticketDTO.toJSON());
    }

    static deleteTicket(ticket) {
        console.log("delete ticket");
    }

    static fetchData(url, handleTicketListChange) {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    handleTicketListChange(data);
                }
        });
    }

    static postData(url = '', data = {}) {
        // Default options are marked with *
        fetch(url, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        });
    }
}