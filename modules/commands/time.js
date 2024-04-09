module.exports.config = {
	name: "time",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "NathanielRomero",//Ntr Ems Boosting
	description: "Xem bây giờ là mấy giờ",
	commandCategory: "Other", 
	usages: "time", 
  usePrefix: false,
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async function({ api, event, args, Currencies, utils, Users }) {
	const moment = require("moment");
	var time = moment.tz("Asia/Manila").format("HH:MM:ss L");
	let data = await api.getUserInfo(event.senderID);
    let name = await data[event.senderID].name
    return api.sendMessage(`👋 Hi ${name} Have a nice day!\nIt's now: ${time} 🛎`, event.threadID, event.messageID)
}