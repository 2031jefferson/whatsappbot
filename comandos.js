const { profileEnd } = require("console");
const { userInfo } = require("os");
const { ChatState } = require("venom-bot");
const { profile } = require("winston");


module.exports = comandos = async  (client, message) => {
    const { type, id, from, t, sender, isGroupMsg, chat, chatId, caption, isMedia, mimetype, quotedMsg, quotedMsgObj, author, mentionedJidList, } = message
    let { pushname, verifiedName, formattedName, shortName } = sender
    if(message.body === '#menu'){
        client.reply(from, `id: ${id}\n\n chatId: ${chatId}\n\n chatstat: ${ChatState}\n\npushname: ${pushname}\n\nshortname: ${shortName}`, id, caption, t);
    }
}