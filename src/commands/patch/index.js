const {
  getCurrentGameVersion,
} = require("../../resolvers/getCurrentGameVersion");

module.exports = async (message, args) => {
  try {
    const currentGameVersion = await getCurrentGameVersion();

    const dotaPatchUrl = `https://www.dota2.com/patches/${currentGameVersion}`;

    message.channel.send(
      `A versão atual do jogo é: ${currentGameVersion}. Para mais detalhes, acesse ${dotaPatchUrl}`
    );
  } catch (error) {
    console.error("Erro ao obter a versão do jogo:", error);
    message.channel.send("🛀 Vai tomar uma ducha, algo deu errado.");
  }
};
