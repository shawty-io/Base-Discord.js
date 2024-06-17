const Discord = require('discord.js')
const config = require('./config.json')

const client = new Discord.Client({
    intents: []
})

module.exports = client

client.slashCommands = new Discord.Collection()
require('./Handler/Comandos')(client)
require('./Handler/Eventos')(client)

client.login(config.token)
