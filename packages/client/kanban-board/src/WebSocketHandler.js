import { useCallback } from "react";

export function initWebSocket(handleTicketListChange) {
    console.log("init WS");
    
    return false;
}

export function readBoardData(handleTicketListChange) {
    fetch('/readBoardData')
        .then((response) => response.json())
        .then((data) => {
            console.log("fetch: " + data.ticketList.toDo[0].text);

            if (data.ticketList) {
                handleTicketListChange(data.ticketList);
            } else {
                //handleTicketListChange(dataOnError);
            }
        })
}

export function closeWebSocket() {
    console.log("closing WS");
}

