const Discord = require("discord.js")

const TOKEN = "OTczOTI2MTQzMzgyMTUxMTk4.GWm-TG.pFO6cULXQijGs9WaH-DYl5UzZsC2CrcFU_wxiY"

const generateImage = require("./generateImage")
const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS" 
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

//Response message when sending "salut"
client.on("messageCreate", (message) => {
    if(message.content == "salut") message.reply("Sictir")
    if(message.content == "gata") message.reply("Sictir")
})
const welcomeChannelID = "973940890785706034"
//Custom image welcome message

client.on("guildMemberAdd", async (member) => {
const img = await generateImage(member)
member.guild.channels.cache.get(welcomeChannelID).send({
  content:   `<@${member.id}> Bine ai venit, sa ma sugi!`, 
  files: [img]
})

})
client.login(TOKEN)