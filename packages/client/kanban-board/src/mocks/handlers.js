import {rest} from 'msw' // msw supports graphql too!

const handlers = [
  rest.get('/readBoardData', async (req, res, ctx) => {
    const ticketList = {
        "toDo": [
            {
                text: "Test Do Text",
                positionInColumn: "1",
                id: "1"
            },
            {
                text: "Test Do Text 2",
                positionInColumn: "1",
                id: "4"
            },
            {
                text: "Test Do Text 3",
                positionInColumn: "1",
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
    // console.log("mockdata fetch: " + ticketList);
    return res(ctx.json({ticketList}));
  }),
]

export {handlers}