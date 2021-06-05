const Discord = require('discord.js');
const db = require("quick.db")
let kayıtayar = require('../kayıt-ayar.json')
exports.run = async (client, message, args) => {
  if(!message.member.roles.cache.has(kayıtayar.kayıtsorumlusuID)) return message.channel.send(`Bu komutu kullanabilmek için yeterli yetkiye sahip olmasın.`)//KAYIT SORUMLUSU ROL ID

  let üye = message.mentions.users.first() || message.author
  if (!üye) return message.channel.send('Üye Etiketler misin ?')
  let rol = message.mentions.roles.first()
  let member = message.guild.member(üye)
  let erkekpuanlar = db.fetch(`kayıt.puan.erkek.${üye.id}`)
    let kadınpuanlar = db.fetch(`kayıt.puan.kadın.${üye.id}`)
    let total = kadınpuanlar + erkekpuanlar
  let yrnexembed = new Discord.MessageEmbed()
  .setAuthor(`Kayıt Puan | Kişi : ${üye.username}`)
  .setColor('BLACK')
  .setDescription(`
:tada: Toplam Kadın Kayıtı Puanın : **${kadınpuanlar ? kadınpuanlar : 'Kayıt Puan Bilgisi Bulunamadı.'}** 

:tada: Toplam Erkek Kayıtı Puanın : **${erkekpuanlar ? erkekpuanlar : 'Kayıt Puan Bilgisi Bulunamadı.'}** 

:tada: Tüm Puan Toplamları : **${total ? total : 'Toplam Kayıt Puan Bilgisi Bulunamadı.'}**
  `)
  .setFooter(`Komutu kullanan yetkili : ${message.author.username}`) 
        .setThumbnail(member.user.avatarURL())
  message.react('825026702207352832')
  return message.channel.send(yrnexembed)
};

exports.help = {
  name: "kayıtpuan",
  guildOnly: true,
  aliases: [],
};