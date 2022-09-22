const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello hell!");
})

app.listen(3000, () => {
})

const Discord = require("discord.js")
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES","GUILD_MEMBERS"] })
//files 
const fs = require("fs");
const prefix = "-"
client.commands = new Discord.Collection();
const commands = fs.readdirSync("./Commands").filter(file => file.endsWith(".js"))

for(file of commands){
  const commandName = file.split(".")[0]
  const command = require(`./Commands/${commandName}`)
  client.commands.set(commandName, command)
}
//console print
client.on("ready", () => {
console.log(`logged in using ${client.user.username}`)
}) 
//welcome
client.on("guildMemberAdd", member => {
const myServer = "1000578922976645211"; 
const welcomeChannel = "1005265223973879880";
 if(member.guild.id === myServer) {
client.channels.cache.get(welcomeChannel).send(`Welcome ${member}!`)
member.send("Welcome to our server")
 }
})

//commands setup
client.on("messageCreate", message => {
if(message.content.startsWith(prefix)){
 const args = message.content.slice(prefix.length).trim().split(/ +/g)
 const commandName = args.shift()
 const command = client.commands.get(commandName)
 if(!command) return message.channel.send({content:"That command doesn't exist"})
command.run(client, message, args)
}
//command with no prefix
if(message.content === "t") {
message.channel.send("PONG!") } 
  
})
//Login (run)
client.login("MTAwMDA5NTQ5MDQ2NzE3MjQ4Mw.GbTn1L.aaWRzBgfG8rNm0mj7EUNQPmwjxH1Ze-e4t8E8U")

