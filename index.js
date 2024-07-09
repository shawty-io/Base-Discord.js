const Discord = require('discord.js')
require('dotenv').config()

const client = new Discord.Client({
    intents: []
})

module.exports = client

client.slashCommands = new Discord.Collection()
require('./Handler/Comandos')(client)
require('./Handler/Eventos')(client)

client.login(process.env.TOKEN)
