const {
  getCurrentGameVersion,
} = require("../../services/getCurrentGameVersion");

module.exports = async (message, args) => {
  try {
    const currentGameVersion = await getCurrentGameVersion();

    const dotaPatchUrl = `https://www.dota2.com/patches/${currentGameVersion}`;

    let keywords = "";
    if (args) {
      keywords = args.join(" ");
      message.channel.send(
        `Você escolheu a versão ${keywords}. Mais detalhes, clique no link https://www.dota2.com/patches/${keywords}`
      );
    } else {
      message.channel.send(
        `A versão atual do jogo é: ${currentGameVersion}. Para mais detalhes, acesse ${dotaPatchUrl}`
      );
    }
  } catch (error) {
    console.error("Erro ao obter a versão do jogo:", error);
    message.channel.send("🛀 Vai tomar uma ducha, algo deu errado.");
  }
};
