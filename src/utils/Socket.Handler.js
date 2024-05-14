import { WebSocketServer } from 'ws';

// Create a WebSocket server instance
const wss = new WebSocketServer({ port: 8080 });

// Event handler for when a client connects
wss.on('connection', function connection(ws) {
  console.log('Client connected');
  // Get the current date and time
  const currentDate = new Date();
  
  // Format the date and time
  const formattedDateTime = currentDate.toISOString().replace('T', ' ').replace(/\..+/, '');
  // Event handler for receiving messages from clients
  ws.on('message', function incoming(message) {
    const messageString = message.toString('utf8');

    console.log('Received message from client:', messageString+`${messageString}" at ${formattedDateTime}`);
  
    // handling the received message & send feedbacback to the client
    ws.send(`Server received your message "${messageString}" at ${formattedDateTime}`);

  });
});

// Event handler for when the server starts listening
wss.on('listening', () => {
  console.log('WebSocket server is listening on port 8080');
});

// Export the WebSocket server instance
export default wss;
