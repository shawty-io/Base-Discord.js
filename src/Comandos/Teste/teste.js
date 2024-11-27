const Discord = require('discord.js')

module.exports = {
    name: 'teste',
    description: 'Comando de Teste',
    type: Discord.ApplicationCommandType.ChatInput,
    run: async (client, interaction) => {
        interaction.reply('👋 Hello World!')
    }
}
