const Discord = require("discord.js");

exports.run = (client, message, args) => {
      message.channel.send(`Pinging...`).then((m4) => {
         setTimeout(() => {
            m4.edit(`\`${client.ws.ping}ms\` is my ping`);
         }, 2000);
      });
   }

