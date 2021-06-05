const Discord = require ("discord.js");
module.exports.run = async (bot, message, args) => { //sharpen

let replies = ["https://media.discordapp.net/attachments/608711476219478045/805122505668952125/a_1b52a6dc2c6b678856b0d985bbf88042.gif","https://media.discordapp.net/attachments/608711476219478045/805122464748535868/Gif_space_9.gif","https://media.discordapp.net/attachments/608711476219478045/805122548882735114/a_1a721383075a45b122d487604d70ec6c-2.gif","https://media.discordapp.net/attachments/608711476219478045/805122569614524456/a_ad513fbcd69889b04884aa4bedd7f64d.gif","https://media.discordapp.net/attachments/608711476219478045/805122641370284082/a_fe919ae7a109597bc17da2708daaca7e.gif","https://media.discordapp.net/attachments/608711476219478045/805200710210813992/39.gif","https://media.discordapp.net/attachments/608711476219478045/805202105370411078/a_431476d4462e00ba1c3ddf4bf0f0f308.gif","https://media.discordapp.net/attachments/608711476219478045/805244410731167775/40.gif","https://media.discordapp.net/attachments/608711476219478045/805244410903658537/image0-8.gif","https://media.discordapp.net/attachments/608711476219478045/819821494418145300/Endless_128.gif?width=93&height=93","https://media.discordapp.net/attachments/608711476219478045/819824750490157116/a_bea3014f1047890a6b201a7e322bc2b1.gif?width=103&height=103","https://media.discordapp.net/attachments/608711476219478045/819824798532239393/image8.gif?width=77&height=77","https://media.discordapp.net/attachments/608711476219478045/819833638082314270/image0.gif?width=115&height=115","https://media.discordapp.net/attachments/608711476219478045/819851971602284565/WalenianMan15.gif?width=86&height=86","giflink"];

let result = Math.floor((Math.random() * replies.length));

let ukqznsharpen = new Discord.MessageEmbed()

.setTitle("Gif'in Hazır;")
.setColor("RANDOM")
.setImage(replies[result]);

message.channel.send(ukqznsharpen); //sharpen

};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["erkek","man-gif"], //sharpen
 permLevel: 0

};

exports.help = {
 name: 'erkek-gif',  //sharpen
 description: 'sends man gif',
 usage: 'man-gif'

};