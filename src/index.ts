import "dotenv/config"
import { Client } from "discord.js"
import { syncCommands } from "./slash-cmds/init"

const client = new Client({
  intents: ["Guilds", "GuildMessages", "GuildMembers", "MessageContent"],
})

syncCommands()

client.on("messageCreate", (msg) => {
  if (msg.content === "!ping") {
    msg.reply("Pong!")
  }
})

client.on("ready", () => {
  console.log(`Logged in as ${client.user?.tag}`)
})

client.login(process.env.TOKEN)
