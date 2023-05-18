const stratzApi = require("../api/stratzApi");
const { getCurrentGameVersion } = require("../resolvers/getCurrentGameVersion");

const getDotaHero = async () => {
  try {
    const currentGameVersion = await getCurrentGameVersion();

    const response = await stratzApi.get("/Hero", {
      params: {
        gameVersionId: currentGameVersion,
        languageId: 1,
      },
    });

    const heroes = [];
    Object.values(response.data).forEach((item) => {
      const hero = {
        id: item.id,
        name: item.displayName,
        stats: {
          attackType: item.stat.attackType,
          initialArmor: item.stat.startingArmor,
          initialMagicArmor: item.stat.startingMagicArmor,
          initialDamageMin: item.stat.startingDamageMin,
          initialDamageMax: item.stat.startingDamageMax,
          attackRange: item.stat.attackRange,
          heroType: item.stat.AttributePrimary,
          strengthBase: item.stat.strengthBase,
          intelligenceBase: item.stat.intelligenceBase,
          agilityBase: item.stat.agilityBase,
          hpRegen: item.stat.hpRegen,
          mpRegen: item.stat.mpRegen,
          moveSpeed: item.stat.moveSpeed,
          complexity: item.stat.complexity,
        },
      };
      heroes.push(hero);
    });

    return heroes;
  } catch (error) {
    console.log(error);
  }
};

module.exports = getDotaHero;
