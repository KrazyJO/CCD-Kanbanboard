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
import FakeDB from './FakeDB';

// 80, { namespace: 'events', cors: { origin: '*' } }
@WebSocketGateway({ cors: { origin: '*' } })
export class WSHandler
    implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    server: Server;

    handleDisconnect(client: any) {
        console.log('disconnect');
    }
    
    handleConnection(client: any, ...args: any[]) {
        console.log("connection");
        this.server.emit('events', 'hello ws')
    }

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
