const patch = require("./patch");
const twitch = require("./twitch");
const gif = require("./gif");

const commands = { patch, twitch, gif };

module.exports = async (message) => {
  let tokens = message.content.split(" ");
  let command = tokens.shift();
  if (command.charAt(0) === "!") {
    command = command.substring(1);
    commands[command](message, tokens);
  }
};
