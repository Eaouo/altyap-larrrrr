const Discord = require ("discord.js"); //sharpen
module.exports.run = async (bot, message, args) => { //sharpen

let replies = ["https://cdn.discordapp.com/attachments/608711485849337856/805186097154883625/Zeyrox_17.gif","https://cdn.discordapp.com/attachments/608711485849337856/805309678602813461/tenor.gif","https://cdn.discordapp.com/attachments/608711485849337856/805326691274194964/a_80ca0dd9e031ca03ceadfe57c65336c0.gif","https://cdn.discordapp.com/attachments/608711485849337856/805310144140410880/unknown.gif","https://cdn.discordapp.com/attachments/608711485849337856/805337528298897428/3235d96cc0fcc40781918c7944e345e1.gif","https://cdn.discordapp.com/attachments/608711485849337856/805337529762709534/image0-4.gif","https://cdn.discordapp.com/attachments/608711485849337856/805337530803027978/a_f4acd2644031316d9e0ae1875ef5312f.gif","https://media.discordapp.net/attachments/608711485849337856/819851612137979934/259c8e6383e11efd6eac46da30fa5bf6.gif?width=203&height=183","https://media.discordapp.net/attachments/608711485849337856/819867855334932510/saikik.gif?width=448&height=303","https://media.discordapp.net/attachments/608711485849337856/819873267095306250/7244f1bc2a6bab0e5d5d37f55a655600.gif?width=225&height=225","https://media.discordapp.net/attachments/608711485849337856/819667411677741056/a_8d66ffd1f58747b1996269c078c3f243.gif?width=115&height=115","https://media.discordapp.net/attachments/608711485849337856/819851612137979934/259c8e6383e11efd6eac46da30fa5bf6.gif"];

let result = Math.floor((Math.random() * replies.length));

let ukqznsharpen = new Discord.MessageEmbed()

.setTitle("Gif'in Hazır;")
.setColor("RANDOM")
.setImage(replies[result]); //sharpen

message.channel.send(ukqznsharpen);

};

exports.conf = {
 enabled: true,       //sharpen
 guildOnly: false,
 aliases: ["anime-gif"],
 permLevel: 0

};
 //sharpen
exports.help = {
 name: 'anime', 
 description: 'sends anime gif',
 usage: 'anime-gif' //sharpen

};