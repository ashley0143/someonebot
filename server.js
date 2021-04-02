/*
  _                       _     ____                                              
 (_)  _ __   ___  ___  __| |   / __ \   ___  ___  _ __ ___   ___  ___  _ __   ___ 
 | | | '_ \ / _ \/ _ \/ _` |  / / _` | / __|/ _ \| '_ ` _ \ / _ \/ _ \| '_ \ / _ \
 | | | | | |  __/  __/ (_| | | | (_| | \__ \ (_) | | | | | |  __/ (_) | | | |  __/
 |_| |_| |_|\___|\___|\__,_|  \ \__,_| |___/\___/|_| |_| |_|\___|\___/|_| |_|\___|
                               \____/                                                                                                     
*/









const express = require("express");
const app = express();
const Discord = require("discord.js");
var clientver = `${Discord.version}`;
const { Client } = require("discord.js");
const client = new Client();
const prefix = "@";
let beklemeSuresi = new Set();

client.on("message", async function(message) {
  var msg = message;

  const user = message.guild.members.cache.random();
  const fetched = await client.users.cache.get(user.id);

  var a = message.guild;
  let command = message.content.split(" ")[0].slice(prefix.length);
  if (
    msg.content.includes(`<@${client.user.id}>`) ||
    msg.content.includes(`<@!${client.user.id}>`)
  ) {
    if (message.author.bot) return;
    if (!beklemeSuresi.has(message.author.id)) {
      return msg.channel.send(`<@${fetched.id}>`, {
        allowedMentions: { parse: [] }
      });
    }
    
    
    if (beklemeSuresi.has(message.author.id)){
      return message.channel.send("chill dude");
    }
    beklemeSuresi.add(message.author.id);
    setTimeout(() => {
      beklemeSuresi.delete(message.author.id);
    }, 5050);
  }
});

client.on("ready", () => {
  client.user.setActivity("help i've fallen and i cant get up i need @someone");

 });

 

client.login("");


/*
                                            
  ___  ___  _ __ ___   ___  ___  _ __   ___ 
 / __|/ _ \| '_ ` _ \ / _ \/ _ \| '_ \ / _ \
 \__ \ (_) | | | | | |  __/ (_) | | | |  __/
 |___/\___/|_| |_| |_|\___|\___/|_| |_|\___|
                                            

*/
