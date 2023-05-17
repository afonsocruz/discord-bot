const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const Discord = require("discord.js");

const client = new Discord.Client();

const commandHandler = require("./commands");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

client.once("ready", () => {
  console.log(`Bot up and running!`);
});

client.on("message", commandHandler);

client.login(process.env.DISCORD_BOT_TOKEN);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
