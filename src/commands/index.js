const patch = require("./patch");
const twitch = require("./twitch");
const gif = require("./gif");
const hero = require("./hero");

const commands = { patch, twitch, gif, hero };

module.exports = async (message) => {
  let tokens = message.content.split(" ");
  let command = tokens.shift();
  if (command.charAt(0) === "!") {
    command = command.substring(1);
    if (commands[command]) {
      commands[command](message, tokens);
    } else {
      return message.channel.send(
        "⚡ Este comando não existe, digite !help para ver todos os meus comandos." //TODO: Implement the !help command
      );
    }
  }
};
