import FakeDB from "./../FakeDB";
import { Columns } from "./../Model/Enums";
import Ticket from "./../Model/Ticket";

function getNewFakeDB(): FakeDB {
  const fakeDB = FakeDB.getInstance();
  fakeDB.reset();
  return fakeDB;
}

describe('FakeDB', () => {

    it('add a new ticket', () => {
      
      const fakeDB = getNewFakeDB();
      const newTicket = new Ticket();
  
      const titel = 'my thrid ticket';
      const text = 'text of my new ticket';
      newTicket.titel = titel;
      newTicket.text = text
      fakeDB.addTicket(newTicket);
  
      expect(newTicket.positionInColumn).toBe(2);
      expect(newTicket.id).toBe(2);
    });
  
    it('columnName to index', () => {
      const fakeDB = getNewFakeDB();
      const toDoIndex = fakeDB.indexOfColumn('ToDo');
      const doingIndex = fakeDB.indexOfColumn('Doing');
      const doneIndex = fakeDB.indexOfColumn('Done');
  
      expect(toDoIndex).toBe(0);
      expect(doingIndex).toBe(1);
      expect(doneIndex).toBe(2);
    });
  
    it('get position for new ticket', () => {
      const fakeDB = getNewFakeDB();
      let position = fakeDB.getNewPositionForTicketInColumn(Columns.ToDo);
      expect(position).toBe(2);
  
      position = fakeDB.getNewPositionForTicketInColumn(Columns.Done);
      expect(position).toBe(0);
    });
  
    it('findAllTicketsInColumn()', () => {
  
    });

    it('deletes a ticket', () => {
      const fakeDB = getNewFakeDB();
      const ticketToDelete = fakeDB.findTicketById(0);
      fakeDB.deleteTicket(ticketToDelete);
      let errorFound = false;
      try {
        fakeDB.findTicketById(0);
      } catch(e) {
        errorFound = true;
      }
      expect(errorFound).toBe(true);
      const updatedTicket = fakeDB.findTicketById(1);
      expect(updatedTicket.positionInColumn).toBe(0);
    });

    it('moves a ticket up', () => {
      const fakeDB = getNewFakeDB();

    });

    it('moves a ticket down', () => {

    });

    it('move a ticket to the next column', () => {

    });

    it('moves a ticket to the previous column', () => {

    })
  });