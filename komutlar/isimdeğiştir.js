const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
exports.run = async(client, message, args) => {
    let prefix = ayarlar.prefix;
 
    let user = message.mentions.users.first()
    let member = message.guild.member(user)
    if(!user) return message.channel.send('Bir kullanıcı etiketle.')
    let isim = args.slice(0).join(" ")
    if(!isim) return message.channel.send('İsim gir.')
    if(isim.lenght > 32) return message.channel.send('Lütfen 32 kelimeyi geçmicek şekilde isim giriniz.')

    member.setNickname(isim)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['nick',"isimdeğiştir","isim-değiştir"],
  permLevel: 0
};

exports.help = {
  name: 'isim-değiştir',
  description: '',
  usage: ''
};