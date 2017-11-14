/**
 *   @author toto
 *   @createdDate    2017-11-15 12:05 AM
 *   @email  toto6321@qq.com
 */

let mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost/Loc8r';
mongoose.connect(mongoURL);


// connection event listeners
const connection_connected = () => {
	console.log("connection is connected");
};
const connection_error = () => {
	console.log("connection is stoped with error");
};
const connection_disconnected = () => {
	console.log("connection is disconnected");
};



//attach event listener
mongoose.connection.on('connected', connection_connected);
mongoose.connection.on('error', connection_error);
mongoose.connection.on('disconnected', connection_disconnected);


// for closing the connection in time

//signal listener
//for windows
const readline = require('readline');
if (process.platform == "win32") {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});
	rl.on("SIGNT", () => {
		process.emit("SIGNT");
	});
}

const gracefulShutDown = (message,callback) => {
	mongoose.connection.close(()=>{
		console.log("Mongoose connection is disconnected through "+message);
		callback();
	});
};

// for nodemon restarts
process.once('SIGUSR2',()=>{
	gracefulShutDown('nodemon restarts',()=>{
		process.kill(process.pid,'SIGUSR2');
	});
});

// for application restarts
process.on('SIGINT',()=>{
	gracefulShutDown('application restarts',()=>{
		process.exit(0);
	});
});



