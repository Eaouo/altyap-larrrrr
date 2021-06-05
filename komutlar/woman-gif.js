const Discord = require ("discord.js");
module.exports.run = async (bot, message, args) => { //sharpen

let replies = ["https://cdn.discordapp.com/attachments/608711473652563968/805367474354389012/trenli-2.gif","https://cdn.discordapp.com/attachments/608711473652563968/805365615237529610/gif-21.gif","https://cdn.discordapp.com/attachments/608711473652563968/805364923692613672/371b5f463e28fc34e435e8d83c2d56bc.gif","https://media.discordapp.net/attachments/608711473652563968/805362922175201280/kaykay3.gif","https://cdn.discordapp.com/attachments/608711473652563968/805334933693792256/1497.gif","https://media.discordapp.net/attachments/608711473652563968/819880793458737153/image0-2-1.gif?width=115&height=115","https://media.discordapp.net/attachments/608711473652563968/819876956333408296/sdfgsdfg.gif?width=115&height=115"];

let result = Math.floor((Math.random() * replies.length));

let ukqznsharpen = new Discord.MessageEmbed()

.setTitle("Gif'in Hazır; ")
.setColor("RANDOM") //sharpen
.setImage(replies[result]);

message.channel.send(ukqznsharpen);

};

exports.conf = {
 enabled: true, //sharpen
 guildOnly: false,
 aliases: ["woman-gif","kadın-gif"],
 permLevel: 0

};

exports.help = {
 name: 'woman', 
 description: 'sends napim gif',
 usage: 'woman-gif'
 //sharpen
};