const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on('ready', () => {
    console.log()
});

client.on('message', msg => {
    if ("@" in MessageChannel.content) {
        //do stuff
    }
}

client.login(config.auth.token);