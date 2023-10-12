const express = require('express');
import { Request, Response } from "express";

const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

const PORT = 3000;

interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
}

interface ClientToServerEvents {
  hello: () => void;
}

interface InterServerEvents {
  ping: () => void;
}

interface SocketData {
  name: string;
  age: number;
}

const io = new Server<
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData
>();

app.get('/', (req: Request, res: Response) => {
	console.log("you've got mail!");
	res.send('Nice work')
});

app.listen(PORT, () => {
	console.log('listening on port', PORT);
})