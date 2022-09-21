export default class ApiCallHandler {
    static readBoardData(handleTicketListChange) {
        fetch('http://localhost:3000/readBoardData', {
        //    mode: "no-cors"
        })
            .then((response) => {
                //console.log("erstes promise " + JSON.parse(response));
                return response.json();
            }
            )
            .then((data) => {
                console.log("fetch: " + data.toDo[0].text);

                if (data) {
                    handleTicketListChange(data);
                } else {
                    //handleTicketListChange(dataOnError);
                }
            })
    }

    static createTicket(ticket) {
        
        const res = ApiCallHandler.postData("http://localhost:3000/createTicket", ticket);
        return res;
    }

    static async postData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response; // parses JSON response into native JavaScript objects
    }
}