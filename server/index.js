const WebSocket = require('ws');

const wss = new WebSocket.Server({
  port: 9876
});

wss.on('connection', function (ws) {
  ws.on('message', function (data) {
    // broadcasts message
    wss.clients.forEach(function each(client) {
      // Ready States: Connecting (0), Open (1), Closing(2), Closed (3)
      if (client.readyState === WebSocket.OPEN) {
        client.send(data.toString());
      }
    });
  });
});

console.log(wss);