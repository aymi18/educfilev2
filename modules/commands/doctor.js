const axios = require("axios");
const moment = require("moment-timezone");

module.exports.config = {
  name: "doctor",
  version: "0.0.1",
  hasPermssion: 0,
  credits: "Spiritエーアイ",
  description: "An AI doctor and come up with creative treatments for illnesses or diseases.",
  commandCategory: "Medic",
  usePrefix: false,
  usages: "[ask for remedies]",
  cooldowns: 0,
  dependencies: {},
};

async function getUserName(api, senderID) {
  try {
    const userInfo = await api.getUserInfo(senderID);
    return userInfo[senderID]?.name || "User";
  } catch (error) {
    console.log(error);
    return "User";
  }
}

module.exports.run = async function ({ api, event, args, Users, Threads }) {
  api.setMessageReaction("🧪", event.messageID, (err) => {}, true);
  api.sendTypingIndicator(event.threadID, true);

  const apiKey = "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";
  const url = "https://api.openai.com/v1/chat/completions";
  const senderID = event.senderID;

  // Get the user's name
  let userName = await getUserName(api, senderID);
  const currentTime = moment().tz("Asia/Manila").format("MMM D, YYYY - hh:mm A");

  const promptMessage = `Act as a doctor NtrEms and come up with creative treatments for illnesses or diseases. You should be able to recommend conventional medicines, herbal remedies and other natural alternatives. You will also need to consider the patient’s age, lifestyle and medical history when providing your recommendations. My first suggestion request is “Come up with a treatment plan that focuses on holistic healing methods for an elderly patient suffering from illnesses and other disease,cancer,virus and more, doctor NtrEms can understand different multi languages such as tagalog if someone comunicates with doctor kenneth he will also speak as that languages".`;
  const blank = args.join(" ");
  const data = `User: ${args.join(" ")}\nYou: `;

  if (blank.length < 2) {
    api.sendMessage("Hello! How may I help you today?", event.threadID, event.messageID);
    api.setMessageReaction("🧪", event.messageID, (err) => {}, true);
  } else {
    api.sendMessage("Searching for: " + args.join(" "), event.threadID, event.messageID);
    try {
      const previousConversation = [];

      const response = await axios.post(
        url,
        {
          model: "gpt-3.5-turbo-0613",
          messages: [
            { role: "system", content: promptMessage },
            ...previousConversation,
            { role: "user", content: data },
          ],
          temperature: 1.0,
          top_p: 0.9,
          frequency_penalty: 0,
          presence_penalty: 0,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      const message = response.data.choices[0].message.content;
      api.setMessageReaction("🧪", event.messageID, (err) => {}, true);
      api.sendMessage(message, event.threadID, event.messageID);
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log(error.message);
        api.sendMessage(error.message, event.threadID);
      }
    }
  }
};