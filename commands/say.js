const Discord = require("discord.js");

module.exports.run = async (kyzero, message, args) => {
  //!say Hi!
  //Hi
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No ._.");
  let kyzeromessage = args.join(" ");
  message.delete().catch();
  message.channel.send(kyzeromessage);
}

module.exports.help = {
  name: "say"
}
