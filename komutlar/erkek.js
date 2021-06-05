const Discord = require('discord.js');
const db = require("quick.db")
let kayıtayar = require('../kayıt-ayar.json')
exports.run = async (client, message, args) => {

  //------------------------------------------------KAYIT KISMI-----------------------------------------------\\ YRNEX 
  
if(!message.member.roles.cache.has(kayıtayar.kayıtsorumlusuID)) return message.channel.send(`Bu komutu kullanabilmek için yeterli yetkiye sahip olmasın.`)//KAYIT SORUMLUSU ROL ID
  let üye = message.mentions.users.first()
  if (!üye) return message.channel.send('Üye Etiketler misin ?')
  let rol = message.mentions.roles.first()
  let member = message.guild.member(üye)
    const tag = kayıtayar.sunucuTag; 
    const nick = args[1];
    const yas = args[2];
      if(!nick) return message.channel.send("Bir isim girin.")
      if(!yas) return message.channel.send("Bir yaş girin.")
  member.setNickname(`${tag} ${nick} | ${yas}`)
  member.roles.add(kayıtayar.erkekID)//VERİLECEK ROL
  member.roles.remove(kayıtayar.kayıtsızID)///ALINACAK ROL
  member.roles.remove(kayıtayar.kadınID)//ALINACAK ROL
  db.add(`kayıt.puan.erkek.${message.author.id}`, +1)
//    db.add(`kayıt.puan.kadın.${message.author.id}`, +1)
  //------------------------------------------------KAYIT KISMI-----------------------------------------------\\ YRNEX
  
  
  
  //------------------------------------------------KAYIT EDİLİYOR-----------------------------------------------\\ YRNEX
  
  let embed = new Discord.MessageEmbed()
  .setColor('BLUE')
  .setDescription(`${üye} Kayıt Ediliyor...`)
  .setFooter(`Komutu kullanan yetkili : ${message.author.username}`) 
  message.react('825026702207352832')
  
  //------------------------------------------------KAYIT EDİLİYOR-----------------------------------------------\\ YRNEX
  

  
  //------------------------------------------------KAYIT LOG-----------------------------------------------\\ YRNEX
  
  return message.channel.send(embed).then(editmsg => {
      let embed2 = new Discord.MessageEmbed()
      .setAuthor(`Başarılı! ${message.author.username}`)
      .setColor('BLUE')
      .setDescription(`${üye} Etiketlenen Kişi Kayıt Edildi.\n\n Kayıt Eden Yetkiliye \`1 Puan\` Eklendi.`)
      .setThumbnail(member.user.avatarURL())
      .setFooter(`Kayıt Puan İçin; .kayıtpuan`)
      editmsg.edit(embed2)
    

 //------------------------------------------------KAYIT CHAT LOG-----------------------------------------------\\ YRNEX
let chatlog = kayıtayar.chatID
let kanal = client.channels.cache.get(chatlog)

kanal.send(`:tada: ${member} **Aramıza Hoşgeldin, Tagımızı Alarak bize destek olabilirsin. Tagımız :** \`${kayıtayar.sunucuTag}\``)


 //------------------------------------------------KAYIT CHAT LOG-----------------------------------------------\\ YRNEX

  })
};

exports.help = {
  name: "e",
  guildOnly: true,
  aliases: ["e"],
};