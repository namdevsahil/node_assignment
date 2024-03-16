const { log } = require('console');
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

const subscribeMessage = (channelName) => {
    console.log(`Thanks For Subscribing to ${channelName}`);
};

eventEmitter.addListener('subscribe',subscribeMessage);
eventEmitter.emit("subscribe","College Walla");

//The above statement must print "Thanks For Subscribing to collage Wallah"