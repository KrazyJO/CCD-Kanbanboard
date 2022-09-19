import { useCallback } from "react";

export function initWebSocket(handleTicketListChange, setConnected, wsRef) {
    console.log("init WS");
    const ws = new WebSocket("ws://localhost:1234");
    ws.onopen = () => {
      setConnected(true);
      console.log("ws client opened");
    };
    ws.onclose = () => {
       // setConnected(false);
        console.log("ws cleit closed");

    }
    ws.onmessage = (event) => {

        handleTicketListChange(JSON.parse(event.data));
    }
    wsRef.current = ws;
    
    return true;
}


export function closeWebSocket() {
    console.log("closing WS");
}

