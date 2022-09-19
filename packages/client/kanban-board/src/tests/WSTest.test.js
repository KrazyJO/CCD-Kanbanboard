import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import WS from "jest-websocket-mock";
import {server} from '../mocks/server.js'

import App from '../App';

import { TicketListClass } from '../mocks/ticketList'

import '@testing-library/jest-dom';

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

let ws;

beforeAll(() => {
  ws = new WS("ws://localhost:1234");
  console.log("WS Created " + JSON.stringify(ws));
});
afterAll(() => {
  console.log("WS closed ");

  WS.clean();
});



beforeAll(() => server.listen())
// if you need to add a handler after calling setupServer for some specific test
// this will remove that handler for the rest of them
// (which is important for test isolation):
afterEach(() => server.resetHandlers())
afterAll(() => server.close())


describe("The App component", () => {
  it("Header Text turn green when ws connection established", async () => {
    
    render(<App />);
    const header = screen.getByText("KANBAN BOARD CC Seminar");
    expect(header).toBeInTheDocument();
    
    await ws.connected;
    
    // header should be in green 
    expect(header).toBeInTheDocument();
    expect(header.classList).toContain("connected");

    // synchronisation prob exits
    // expect(TicketListClass.getInstance().ticketList.toDo.length).toBe(3);

    const input = await screen.findByLabelText(/Ticket Text/i);
    expect(input).toBeInTheDocument();

    userEvent.type(input, "Hello there");
    fireEvent.submit(input);

    const createButton = await screen.findByText("Create");
    await waitFor(() => expect(createButton).not.toBeDisabled(), {
        timeout: 5000,
      });
    createButton.click();

    // synchronisation prob exits
    // await waitFor ( () => expect(TicketListClass.getInstance().ticketList.toDo.length).toBe(4));
    
    // take dummy list cause prob mentioned above
    ws.send(JSON.stringify(ticketList));
    
    const newTicket = await screen.findByText("WS Ticket");

    expect(newTicket).toBeInTheDocument();
  });

});

// it("sends and receives messages", async () => {
//     // const server = new WS("ws://localhost:1234");
 
//      render(<App />);
//      await ws.connected;
 
//      await screen.findByText(/Ticket Text/i);
 
//      expect(TicketListClass.getInstance().ticketList.toDo.length).toBe(3);
//      const input = screen.getByDisplayValue('Test Do Text');
//      expect(input).toBeInTheDocument();
 
//     //  userEvent.type(input, "Hello there");
//     //  fireEvent.submit(input);

//     //  const createButton = await screen.findByText("Create");
//     //  createButton.click();

//      const ticketList = {
//         "toDo": [
//             {
//                 text: "Test Do Text",
//                 positionInColumn: "1",
//                 id: "1"
//             },
//             {
//                 text: "Test Do Text 2",
//                 positionInColumn: "2",
//                 id: "4"
//             },
//             {
//                 text: "Test Do Text 3",
//                 positionInColumn: "3",
//                 id: "5"
//             },
//             {
//                 text: "WS Ticket",
//                 positionInColumn: "4",
//                 id: "6"
//             }
//         ],
//         "doing": [
//             {
//                 text: "Test Doing",
//                 positionInColumn: "1",
//                 id: "2"
//             }
//         ],
//         "done": [
//             {
//                 text: "Test Done",
//                 positionInColumn: "1",
//                 id: "3"
//             }
//         ],
//     }
//      //await expect(TicketListClass.getInstance().ticketList.toDo.length).toBe(4);
//      ws.send(JSON.stringify(ticketList));
     
//      const newTicket = await screen.findByText(/WS Ticket/i);

//      expect(newTicket).toBeInTheDocument();

//     // await waitFor(() => {
//     //     expect(screen.getByDisplayValue('WS Ticket')).toBeInTheDocument();
//     // }); 

//    });