const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

const token = process.env.API_KEY;

const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
  console.log(msg);
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `Ти написав мені ${msg.text}`);
});
