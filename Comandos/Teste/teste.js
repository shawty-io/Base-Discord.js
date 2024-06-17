const Discord = require('discord.js')

module.exports = {
    name: "teste",
    description: "Sem Descrição",
    type: Discord.ApplicationCommandType.ChatInput,
    run: async (client, interaction) => {
        interaction.reply('Testado!')
    }
}
