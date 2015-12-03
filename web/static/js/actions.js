import { configureChannel } from './channel';

let socket = configureChannel();
let channelInstance = socket.channel("markets:lobby");
