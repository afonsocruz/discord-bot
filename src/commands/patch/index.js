const {
  getCurrentGameVersion,
} = require("../../services/getCurrentGameVersion");

module.exports = async (message, args) => {
  try {
    const currentGameVersion = await getCurrentGameVersion();
    message.channel.send(`A versão atual do jogo é: ${currentGameVersion}.`);
  } catch (error) {
    console.error("Erro ao obter a versão do jogo:", error);
    message.channel.send("🛀 Vai tomar uma ducha, algo deu errado.");
  }
};
