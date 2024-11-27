require('dotenv').config()
const Discord = require('discord.js')

const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMembers
    ]
})

module.exports = client

client.slashCommands = new Discord.Collection()
require('./src/Handler/Comandos')(client)
require('./src/Handler/Eventos')(client)

client.login(process.env.TOKEN)