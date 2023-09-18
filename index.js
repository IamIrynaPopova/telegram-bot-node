const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

const token = process.env.API_KEY;

const bot = new TelegramBot(token, { polling: true });
bot.setMyCommands([
  {
    command: "/start",
    description: "Почати",
  },
  {
    command: "/info",
    description: "Є питання?",
  },
]);

bot.on("message", async (msg) => {
  console.log(msg);
  const chatId = msg.chat.id;
  const textMessage = msg.text;
  switch (textMessage) {
    case "/start":
      await bot.sendMessage(chatId, "Вітаємо в MedicalCenter!");
      bot.sendPhoto(
        chatId,
        "https://www.istockphoto.com/uk/%D1%84%D0%BE%D1%82%D0%BE/%D1%83%D1%81%D0%BC%D1%96%D1%85%D0%BD%D0%B5%D0%BD%D0%B0-%D0%B6%D1%96%D0%BD%D0%BA%D0%B0-%D0%BB%D1%96%D0%BA%D0%B0%D1%80-%D0%B7-%D1%86%D0%B8%D1%84%D1%80%D0%BE%D0%B2%D0%B8%D0%BC-%D0%BF%D0%BB%D0%B0%D0%BD%D1%88%D0%B5%D1%82%D0%BE%D0%BC-%D1%89%D0%BE-%D1%81%D1%82%D0%BE%D1%97%D1%82%D1%8C-%D0%BD%D0%B0-%D1%96%D0%B7%D0%BE%D0%BB%D1%8C%D0%BE%D0%B2%D0%B0%D0%BD%D0%BE%D0%BC%D1%83-%D1%81%D1%96%D1%80%D0%BE%D0%BC%D1%83-%D1%82%D0%BB%D1%96-gm1436148451-477268657"
      );
      //       await bot.sendSticker(
      //         chatId,
      //         "https://tlgrm.ru/_/stickers/3e5/ebd/3e5ebd66-48f9-3202-a195-a6bd19aaf939/1.webp"
      //       );
      break;
    case "/info":
      await bot.sendMessage(chatId, "Яка інформація Вас цікавить?");
      break;
    default:
      await bot.sendMessage(
        chatId,
        `Ти написав мені ${textMessage}
Я тебе не розумію.
🤷 Спробуй ще...`
      );
  }
});
