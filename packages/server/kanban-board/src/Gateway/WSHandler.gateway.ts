import {
    MessageBody,
    OnGatewayConnection,
    OnGatewayDisconnect,
    OnGatewayInit,
    SubscribeMessage,
    WebSocketGateway,
    WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import FakeDB from '../FakeDB';
import IWSHandler from './../interfaces/IWSHandler';

@WebSocketGateway({ cors: { origin: '*' } })
export class WSHandler
    implements IWSHandler, OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    server: Server;

    // this method needs to be defined
    handleDisconnect(client: any) {
        console.log('disconnect');
    }
    
    // this method needs to be defined
    handleConnection(client: any, ...args: any[]) {
        console.log("connection");
    }

    // this method needs to be defined
    afterInit(server: any) {
        console.log("afterInit");
    }
    
    @SubscribeMessage('events')
    handleEvent(@MessageBody() data: string): string {
        return data;
    }

    public broadcastUpdatesToClient() {
        const fakeDB = FakeDB.getInstance();
        this.server.emit('events', fakeDB.getTicketList());
    }
}
