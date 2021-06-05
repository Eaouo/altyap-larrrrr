const Discord = require ("discord.js"); //sharpen
module.exports.run = async (bot, message, args) => { //sharpen

let replies = ["https://cdn.discordapp.com/attachments/608711488806584330/805168359754432542/oxytyche_49.gif","https://cdn.discordapp.com/attachments/608711488806584330/805168390364856390/oxytyche_17.gif","https://cdn.discordapp.com/attachments/608711488806584330/805168619314741298/tenor_4.gif","https://cdn.discordapp.com/attachments/608711488806584330/805169187558260756/oxytyche_66.gif","https://cdn.discordapp.com/attachments/608711488806584330/805172825413124136/image0-26.gif","https://media.discordapp.net/attachments/608711488806584330/817004349413916672/48.gif?width=115&height=115","https://media.discordapp.net/attachments/608711488806584330/817116941587447848/Gif_PP_72.gif?width=82&height=81","https://media.discordapp.net/attachments/608711488806584330/817117232756293662/mirakaan_4.gif?width=115&height=115","https://media.discordapp.net/attachments/608711488806584330/817117321960226866/ENES_ACAR_GIF_27.gif?width=115&height=115"];

let result = Math.floor((Math.random() * replies.length));

let ukqznsharpen = new Discord.MessageEmbed()

.setTitle("Gif'in Hazır; ")
.setColor("RANDOM")
.setImage(replies[result]); //sharpen

message.channel.send(ukqznsharpen);

};
//sharpen
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["animal-gif","hayvan-gif"], //sharpen
 permLevel: 0

};

exports.help = {
 name: 'animal-gif', //sharpen
 description: 'sends animal gif',
 usage: 'animal-gif'

};