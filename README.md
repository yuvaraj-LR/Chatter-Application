ChatterUp Application

ChatterUp is a real-time chat application where multiple users can connect to a shared room and exchange messages with each other. The application is built using Node.js, Express.js, Socket.IO, and MongoDB to provide seamless communication and data storage.

Dependencies
To run ChatterUp, you need the following dependencies:
  1. Node.js: A JavaScript runtime environment.
  2. Express.js: A web application framework for Node.js, used for handling HTTP requests and routing.
  3. Socket.IO: A library for real-time web applications, enabling bidirectional communication between clients and servers.
  4. MongoDB: A NoSQL database for storing chat messages and user data.
  5. CORS: A middleware for Express.js to enable Cross-Origin Resource Sharing, allowing the client-side application to make requests to the server from a different origin.

Installation
To install the dependencies, run the following command:

Copy code
npm install socket.io node express mongodb cors

This command installs all the required Node.js modules specified in the package.json file, including Socket.IO, Express.js, MongoDB, and CORS middleware.

Functionality
ChatterUp allows users to:
  1. Connect to a shared room: Users can join a common chat room to communicate with other users in real-time.
  2. Share messages: Users can exchange text messages with other users in the same chat room instantly.
  3. Store messages: Chat messages are stored in MongoDB, ensuring that messages are persisted even if users disconnect or refresh the application.
  4. Real-time updates: Any message sent by a user is immediately broadcasted to all other users in the room, providing a seamless and responsive chat experience.
With its intuitive interface and real-time capabilities, ChatterUp offers an engaging platform for users to connect, communicate, and share their thoughts and ideas with others in real-time.

