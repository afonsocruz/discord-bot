module.exports = async (message, args) => {
  try {
    const response = await message.channel.send(
      "https://twitch.tv/paipesado 🍌"
    );
    return response;
  } catch (error) {
    console.log(error);
    message.channel.send("🌩️ Feel the God's fury! Algum erro ocorreu!");
  }
};
