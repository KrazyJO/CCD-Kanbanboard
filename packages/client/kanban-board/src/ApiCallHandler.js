import TicketDTO from "./TicketDTO";

const METHODS = {
    DELETE: "DELETE",
    POST: "POST"
}

export default class ApiCallHandler {
    static readBoardData(handleTicketListChange) {
        const url = this.buildUrl("/readBoardData");
        this.fetchData(url, handleTicketListChange);
    }

    static buildUrl(alias) {
        const base = "http://localhost:3001";
        return base + alias;
    }

    static createTicket(ticket) {
        const ticketDTO = new TicketDTO(undefined, ticket.ticketText);
        const url = ApiCallHandler.buildUrl("/createTicket");
        ApiCallHandler.sendData(url, ticketDTO.toJSON());
    }

    static deleteTicket(ticket) {
        const url = ApiCallHandler.buildUrl("/receiveDelete");
        ApiCallHandler.sendData(url, ticket, METHODS.DELETE);
    }

    static updateTicket(ticket) {
        const url = ApiCallHandler.buildUrl("/receiveUpdate");
        ApiCallHandler.sendData(url, ticket);
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

    static sendData(url = '', data = {}, method = METHODS.POST) {
        // Default options are marked with *
        fetch(url, {
            method: method,
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