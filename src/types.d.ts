// this is a global typescript declaration file
// types will be available in all files


// websocket socket.io types
interface ServerToClientEvents {
	noArg: () => void;
	basicEmit: (a: number, b: string, c: Buffer) => void;
	withAck: (d: string, callback: (e: number) => void) => void;
}

interface ClientToServerEvents {
	ping: (callback: (serverDate: Date) => void) => void;
}

interface InterServerEvents {
	ping: () => void;
}

interface SocketData {
	name: string;
}
