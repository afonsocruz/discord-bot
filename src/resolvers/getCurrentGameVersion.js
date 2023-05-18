const stratzApi = require("../api/stratzApi");

const getCurrentGameVersion = async () => {
  try {
    const response = await stratzApi.get("/GameVersion");
    return response.data[0].name;
  } catch (error) {
    console.error("Erro ao obter a versão do jogo:", error);
    throw error;
  }
};

module.exports = {
  getCurrentGameVersion,
};
