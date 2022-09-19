import {rest} from 'msw' // msw supports graphql too!

import { TicketListClass } from './ticketList';

const handlers = [
  rest.get('/readBoardData', async (req, res, ctx) => {
    // console.log("mockdata fetch: " + ticketList);
    const ticketList = TicketListClass.getInstance().ticketList;
    return res(ctx.json({ ticketList }));
  }),
  rest.post('/createTicket', async(req, res, ctx) => {
    const data = await req.json();
    const newTicket = {
        text: "WS Ticket",
        positionInColumn: 1,
        id: 6
    }
   TicketListClass.getInstance().ticketList.toDo.push(newTicket);
   console.log("New Ticketlist: " + JSON.stringify(TicketListClass.getInstance().ticketList));
    return res(ctx.body("Success"));
  })
]

export {handlers}