/*
  _                       _     ____                                              
 (_)  _ __   ___  ___  __| |   / __ \   ___  ___  _ __ ___   ___  ___  _ __   ___ 
 | | | '_ \ / _ \/ _ \/ _` |  / / _` | / __|/ _ \| '_ ` _ \ / _ \/ _ \| '_ \ / _ \
 | | | | | |  __/  __/ (_| | | | (_| | \__ \ (_) | | | | | |  __/ (_) | | | |  __/
 |_| |_| |_|\___|\___|\__,_|  \ \__,_| |___/\___/|_| |_| |_|\___|\___/|_| |_|\___|
                               \____/                                                                                                     
*/

const { Client } = require('discord.js'),
      client = new Client(),
      beklemeSuresi = new Set();

let mentionReg;

client.once('ready', async () => {
  mentionReg = new RegExp(`^<@!?${client.user.id}>$`);
  await client.user.setActivity("help i've fallen and I can't get up, I need @someone");
});

client.on('message', async message => {
  if (message.author.bot || message.channel.type === 'dm' || !mentionReg.test(message.content)) return;

  if (beklemeSuresi.has(message.author.id)) return await message.channel.send('Chill with the pings.');

  beklemeSuresi.add(message.author.id);

  setTimeout(() => beklemeSuresi.delete(message.author.id), 5000);

  await message.guild.members.fetch();

  return await message.channel.send(message.guild.members.cache.random().toString(), {
    allowedMentions: {
      parse: []
    }
  });
});

client.login('');


/*
                                            
  ___  ___  _ __ ___   ___  ___  _ __   ___ 
 / __|/ _ \| '_ ` _ \ / _ \/ _ \| '_ \ / _ \
 \__ \ (_) | | | | | |  __/ (_) | | | |  __/
 |___/\___/|_| |_| |_|\___|\___/|_| |_|\___|
                                            

*/
