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

    if (result) {
      let msgAsCode = `
Herói: ${result.name}
⚔️Tipo de Ataque: ${result.stats.attackType}
🛡️Armadura Inicial: ${result.stats.initialArmor}
🪄Armadura Mágica Inicial: ${result.stats.initialMagicArmor}
🍴Dano Mínimo Inicial: ${result.stats.initialDamageMin}
🔪Dano Máximo Inicial: ${result.stats.initialDamageMax}
🎯Alcance de Ataque: ${result.stats.attackRange}
⭐Tipo: ${result.stats.heroType}
💪Força Base: ${result.stats.strengthBase}
🧠Inteligência Base: ${result.stats.intelligenceBase}
🏃Agilidade Base: ${result.stats.agilityBase}
🔴Regeneração de HP: ${result.stats.hpRegen}
🔵Regeneração de MP: ${result.stats.mpRegen}
⏩Velocidade de Movimento: ${result.stats.moveSpeed}
🍼Complexidade: ${result.stats.complexity}
        `;
      let msgContent = `\u0060\u0060\u0060${msgAsCode}\u0060\u0060\u0060`;

      message.channel.send(msgContent);
    } else {
      message.channel.send("não encontrado");
    }
  } catch (error) {
    console.log(error);
  }
};
