const heroTypeConverter = (heroType) => {
  switch (heroType) {
    case "str":
      return "Força";
    case "int":
      return "Inteligência";
    case "agi":
      return "Agilidade";
    default:
      return null;
  }
};

const heroComplexityConverter = (heroComplexity) => {
  switch (heroComplexity) {
    case 1:
      return "Fácil";
    case 2:
      return "Moderado";
    case 3:
      return "Difícil";
    default:
      return null;
  }
};

module.exports = {
  heroTypeConverter,
  heroComplexityConverter,
};
