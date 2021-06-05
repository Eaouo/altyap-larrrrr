const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  let ukqzn = message.mentions.roles.first()
  if (!ukqzn) return message.channel.send('Lütfen Abone rolünü etiketlermisin?')
   
  db.set(`abonerolü_${message.guild.id}`, ukqzn.id)
  message.channel.send(`Abone Rolü Başarıyla Ayarlandı; **${ukqzn}**`)
 };

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 3,
  kategori:"yetkili"
};

exports.help = {
 name: 'abonerol-ayarla',
 description: 'kayıt Olunca Verilecek rolü ayarlarsınız',
 usage: 'kayıt-rol <@rol>'
};