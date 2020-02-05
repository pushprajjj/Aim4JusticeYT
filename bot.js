var Discord = require('discord.js');
var botName = require('./package.json');
var bot = new Discord.Client();

bot.on('message', message =>{

    // Variables
    var sender = message.author; //The person who sent the message
    var msg = message.content;
    var prefix = ">" //The text before commands, you can put anything that you prefer

    if(message.author.id != "674529133174194216" && message.channel.id === "673861483125407764"){
        if(msg.startsWith('.', 0)){
            if(msg === prefix + "Aim" && message.channel.id === "673861483125407764"){
                message.channel.send('Aim4Justice is here buddy!') // Sends a message to the channel, with the content
            }
            else{
                message.channel.send(sender + " I only understand .Aim right now. More will be added when my creator Aim4 JusticeYT is free. :) ")
            }
        }
        else{
            message.delete();
            message.channel.send(sender + " this bot only accepts commands which starts with . (dot).");
        }
    }
});

bot.login(process.env.BOT_TOKEN)
