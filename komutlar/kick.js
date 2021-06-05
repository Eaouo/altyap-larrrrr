const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {
  if (!args[0])
    return message.channel.send(
      `Sharpen | Lütfen kimi kicklemek istediğinizi belirtin! (Lütfen kullanıcı İD veya kullanıcı adını belirtin)`
    );
  let User = message.guild.members.cache.get(args[0]);
  if (!User)
    return message.channel.send(
      `Sharpen | Bu sunucudaki bir kullanıcı değil! Tekrar deneyin`
    );
  let Reason = message.content.split(`!kick ${User.id} `);
  if (!args[1])
    return message.channel.send(
      `Sharpen | Lütfen bir neden belirtin! Nedeni olmayan birini yasaklayamazsın, değil mi?`
    );
  if (!Reason)
    return message.channel.send(
      `Sharpen | Lütfen bir neden belirtin! Nedeni olmayan birini yasaklayamazsın, değil mi?`
    );
  if (!User.kickable)
    return message.channel.send(
      `Sharpen | You can not kick this user, they may have a role higher then me or the same role as me.`
    );
  if (!message.member.permissions.has("KICK_MEMBERS"))
    return message.channel.send(`Bu Komutu Kullanmağa Malesef İznin Yok!`);
  User.kick(Reason);
  const motion = new MessageEmbed()
    .setTitle(`Sharpen | You have kicked a member!`)
    .setDescription(
      `Sharpen | Bu Kullanıcı ${
        client.users.cache.get(User.id).username
      } Başarıyla Sunucudan Kicklendi!`
    )
    .setColor(`RANDOM`);
  message.channel.send(motion);
  
};

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ["kick"],
  permLevel: 0
};

exports.help = {
  name: "kick",
  description: "",
  usage: ""
};