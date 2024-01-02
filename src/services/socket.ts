import socketio, { Socket } from 'socket.io-client';

interface Coordinates {
  latitude: number;
  longitude: number;
}

const socket: Socket = socketio('http://192.168.1.16:3333', {
  autoConnect: false,
});

function subscribeToNewDevs(subscribeFunction: (data: any) => void): void {
  socket.on('new-dev', subscribeFunction);
}

function connect(latitude: number, longitude: number, techs: string[]): void {
  socket.io.opts.query = {
    latitude,
    longitude,
    techs,
  };

  socket.connect();
}

function disconnect(): void {
  if (socket.connected) {
    socket.disconnect();
  }
}

export { connect, disconnect, subscribeToNewDevs };
