const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.MessageEmbed()

.then;   
const mhelp = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(`${client.user.username} `, client.user.avatarURL)  
.setTitle("Sharpen v12 Moderasyon")
.setThumbnail("https://cdn.discordapp.com/emojis/727894683061321759.gif?v=1")
    .setDescription(`


╔═════════════════════════════════════╗
║**MODERASYON KOMUTLARI**
║**!ban**   Sunucudan bir üyeyi yasaklar.
║**!unban** İstediğiniz kişinin banını kaldırır.
║**!kick**  Sunucudan bir üye kickler.
║**!sunucu-kur**  Hazır sunucu kurarsın.
║**!isim-değiştir**  Kullanıcının ismini değiştirirsiniz.
║**!emoji-ekle**  Sunucuya emoji eklersin.
║══════════════════════════════════════
║**SOHBET KOMUTLARI**
║**!afk**          AFK kalırsınız etiketlendiğinizde sebebi yazar.
║**!sil**          Belirli bir kanaldaki mesajları siler.
║**!sohbet-kapat** Sohbeti Kapatır ve yazı yazılamaz.
║**!sohbet-aç**    Sohbeti Açar ve yazı yazılabilir.
║**!nuke**         Kanalı kapatır,mesajları siler ve tekrardan açar.
║**!mute**         Kişiye chat/voice mute atılır.
║
╚═════════════════════════════════════╝
`) 
       .addField(`» Sharpen V12 MODERASYON`, `**[Destek Sunucusu](https://discord.gg/QTVDmgbT46)**`)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
message.channel.send(mhelp)
.then; const sembed = new Discord.MessageEmbed()

}; 
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["yardım"], 
    permLevel: 0 
  };
 
  exports.help = {
    name: 'yardım', 
    description: '',
    usage: ''
  };