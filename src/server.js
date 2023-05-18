const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const Discord = require("discord.js");

const client = new Discord.Client();

const commandHandler = require("./commands");

const getDotaHero = require("./resolvers/getDotaHero");
const getAbility = require("./resolvers/getAbility");
const getLanguages = require("./resolvers/getLanguages");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

client.once("ready", () => {
  console.log(`Bot up and running!`);
});

app.get("/api/heroes", async (req, res) => {
  const result = await getDotaHero();

  res.json({
    result, 
  });
});

app.get("/api/skills", async (req, res) => {
  const result = await getAbility();

  if (!result) return res.json({ message: "Unexpected Error" });

  res.json({
    data: result,
  });
});

app.get("/api/languages", async (req, res) => {
  const result = await getLanguages();

  if (result) {
    res.json({
      data: result,
    });
  } else {
    res
      .statusCode(404)
      .json({ message: "Something bad happened on languages route" });
  }

  if (!result) return res.json({ message: "Unexpected Error" });

  res.json({
    data: result,
  });
});

client.on("message", commandHandler);

client.login(process.env.DISCORD_BOT_TOKEN);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
