import { configureChannel } from './channel';

let socket = configureChannel();
let channel = socket.channel("*");
