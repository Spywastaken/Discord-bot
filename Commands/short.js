const Discord = require("discord.js")
exports.run = (client , message ,args ,tools) =>{
const api = require('i8.ae')
const i8 = new api("TOTVsCiEmDGVKTAz")

let url = args[0];

 if(!url){
    message.reply("You need to enter a link to shorten")
 } else {
    i8.short(url).then(res => {
        message.channel.send(res.shorturl)
        }
    )
 }

}
