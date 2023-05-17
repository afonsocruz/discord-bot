const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

module.exports = async (message, args) => {
  let keywords = "zeus";
  if (args.length > 0) {
    keywords = args.join(" ");
  }

  let url = `${process.env.TENOR_API_URL}${keywords}&key=${process.env.TENOR_API_KEY}&limit=50`;
  try {
    let response = await axios.get(url);
    console.log(response.data);
    const index = Math.floor(Math.random() * response.data.results.length);
    message.channel.send(response.data.results[index].url);
    message.channel.send(`GIF from Tenor: ${keywords}`);
  } catch (error) {
    console.log(error);
    message.channel.send(
      "💩 Deu merda, não adianta tentar de novo, mentira, pode tentar."
    );
  }
};
