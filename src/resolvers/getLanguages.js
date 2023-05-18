const stratzApi = require("../api/stratzApi");

const getLanguages = async () => {
  try {
    const response = await stratzApi.get("Language");

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = getLanguages;
