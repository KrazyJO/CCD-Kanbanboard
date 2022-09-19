import FakeDB from "./../FakeDB";
import { Columns } from "./../Model/Enums";
import Ticket from "./../Model/Ticket";

describe('FakeDB', () => {

    it('add a new ticket', () => {
      
      const fakeDB = FakeDB.getInstance();
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
      const fakeDB = FakeDB.getInstance();
      const toDoIndex = fakeDB.indexOfColumn('ToDo');
      const doingIndex = fakeDB.indexOfColumn('Doing');
      const doneIndex = fakeDB.indexOfColumn('Done');
  
      expect(toDoIndex).toBe(0);
      expect(doingIndex).toBe(1);
      expect(doneIndex).toBe(2);
    });
  
    it('get position for new ticket', () => {
      const fakeDB = FakeDB.getInstance();
      let position = fakeDB.getNewPositionForTicketInColumn(Columns.ToDo);
      expect(position).toBe(2);
  
      position = fakeDB.getNewPositionForTicketInColumn(Columns.Done);
      expect(position).toBe(0);
    });
  
    it('findAllTicketsInColumn()', () => {
  
    });

    it('deletes a ticket', () => {
      const fakeDB = FakeDB.getInstance();
      const ticketToDelete = fakeDB.findTicketById(0);
      fakeDB.delete(ticketToDelete);
    });
    
  });