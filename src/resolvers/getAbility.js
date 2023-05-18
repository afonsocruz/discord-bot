const stratzApi = require("../api/stratzApi");
const { getCurrentGameVersion } = require("../resolvers/getCurrentGameVersion");

const getAbility = async () => {
  try {
    const currentGameVersion = await getCurrentGameVersion();

    const response = await stratzApi.get("/Ability", {
      params: {
        gameVersionId: currentGameVersion,
        languageId: 1,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = getAbility;
