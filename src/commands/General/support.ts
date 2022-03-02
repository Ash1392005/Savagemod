import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
  constructor(client: WAClient, handler: MessageHandler) {
    super(client, handler, {
      command: "support",
      aliases: ["support"],
      description: "Gets the support group links",
      category: "general",
      usage: `${client.config.prefix}Support`,
      baseXp: 10,
    });
  }

  run = async (M: ISimplifiedMessage): Promise<void> => {
    await this.client.sendMessage(
      M.sender.jid,
      ` _*I'M FROM Lord Savage 🕊️*\n\n
        _*ELAINA NEWS*_:https://chat.whatsapp.com/KcjW4Cl46L1ECpot1FeO\n\n 
        _*WELCOME TO Lord Savage*_:https://chat.whatsapp.com/Gy1JemBGs9wLjVEfzbRJ21\n\n
        _*ELAINA CASINO GROUP*_:https://chat.whatsapp.com/EOB2UescDz78rTYG4MQWe1\n\n 
        _*ELAINA NSFW*_:https://chat.whatsapp.com/GSK6jAz78107yJrjeV71
        _*ELAINA QUIZ*_:https://chat.whatsapp.com/F6gqHxiHImDi5oc3ExBf`,

      MessageType.text
    );

    return void M.reply("Sent you the Group Link in personal message");
  };
}
