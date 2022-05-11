const Discord = require("discord.js")

const TOKEN = "OTczOTI2MTQzMzgyMTUxMTk4.GWm-TG.pFO6cULXQijGs9WaH-DYl5UzZsC2CrcFU_wxiY"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})


client.on("messageCreate", (message) => {
    if(message.content == "salut") message.reply("Sictir")
})
client.login(TOKEN)