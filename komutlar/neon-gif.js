const Discord = require ("discord.js"); //sharpen
module.exports.run = async (bot, message, args) => { //sharpen

let replies = ["https://media.discordapp.net/attachments/755890505681731714/805127119750823936/lethianeongif254.gif","https://media.discordapp.net/attachments/755890505681731714/805127131850997770/lethianeongif64.gif","https://media.discordapp.net/attachments/755890505681731714/804958103207673886/qwewqewqeqweasdasdasdasdwqewqeqweasdasdasdasdasdwewqeqwewdasdasdasd.gif","https://media.discordapp.net/attachments/755890505681731714/804759823760490536/a_bbe4ea9afe45d7ca843dde7480be2726.gif","https://media.discordapp.net/attachments/755890505681731714/804614760603451422/a_c901815fcbaf6b238b2b4711239c6634_1.gif","https://media.discordapp.net/attachments/755890505681731714/804614867901349908/a_64faec5386ba8e7841152bdc3a6dd937.gif","https://media.discordapp.net/attachments/755890505681731714/819355653444206672/ezgif-2-57814718c686.gif?width=225&height=225","https://media.discordapp.net/attachments/755890505681731714/819452435567345664/a_21e1c50008797c36a3d6a7db0c873983.gif?width=103&height=103","https://media.discordapp.net/attachments/755890505681731714/819452435931463700/a_610b3ce1ab1747dafe8ba5e5f44cc534.gif?width=115&height=115","https://media.discordapp.net/attachments/755890505681731714/819455896371331092/a_a8e76ae696c61ac075b708b3803bb9d3.gif?width=115&height=115","https://media.discordapp.net/attachments/755890505681731714/819493777818517524/20210309_135220.gif?width=115&height=115"];

let result = Math.floor((Math.random() * replies.length));

let ukqznsharpen = new Discord.MessageEmbed()

.setTitle("Gif'in Hazır;")
.setColor("RANDOM")
.setImage(replies[result]); //sharpen

message.channel.send(ukqznsharpen);

}; //sharpen

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["neon-gif"],
 permLevel: 0 //sharpen

};

exports.help = { //sharpen
 name: 'neon-gif', 
 description: 'sends neon gif',
 usage: 'neon-gif'

};