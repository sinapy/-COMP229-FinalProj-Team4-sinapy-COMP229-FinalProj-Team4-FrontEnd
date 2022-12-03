const username = "newUser"
const password = "yNITJJxMCQxKMQrJ"
const cluster = "Cluster0"
const dbname = "WDLG"

let atlasDB = `mongodb+srv://${username}:${password}@${cluster}.qysqx.mongodb.net/${dbname}?retryWrites=true&w=majority`;
// In real project, never expo


// Database setup
let mongoose = require('mongoose');

module.exports = function(){
    
    mongoose.connect(atlasDB);
    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error:'));
    mongodb.once('open', ()=>{
        console.log('===> Connected to MongoDB.');
    })

    return mongodb;
}