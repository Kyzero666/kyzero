const Discord = require("discord.js");

module.exports.run = async (kyzero, message, args) => {
    let bicon = kyzero.user.displayAvatarURL;
    let kyzeroembed = new Discord.RichEmbed()
    .setDescription("Kyzero Information")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot Name", kyzero.user.username)
    .addField("Created On", kyzero.user.createdAt);

    message.channel.send(kyzeroembed);
}

module.exports.help = {
  name:"kyzeroinfo"
}
