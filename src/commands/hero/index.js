const getDotaHero = require("../../resolvers/getDotaHero");

module.exports = async (message, args) => {
  let keywords = "Zeus";
  if (args.length > 0) {
    keywords = args.join(" ");
  }

  const heroes = await getDotaHero();

  try {
    const result = heroes.find(
      (item) => item.name.toLowerCase() === keywords.toLocaleLowerCase()
    );

    console.log(result);

    if (result) {
      message.channel.send(`"``````"`);
    } else {
      message.channel.send("não encontrado");
    }
  } catch (error) {
    console.log(error);
  }
};
