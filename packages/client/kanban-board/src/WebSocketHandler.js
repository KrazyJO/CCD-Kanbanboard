import { useCallback } from "react";
import {io} from 'socket.io-client';

export function initWebSocket() {
    const socket = io("ws://127.0.0.1:3000");
    return socket;
}


export function closeWebSocket() {
    console.log("closing WS");
}

