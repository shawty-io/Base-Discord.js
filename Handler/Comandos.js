const fs = require("fs");

module.exports = async (client) => {
    const SlashsArray = []

    fs.readdir(`./Comandos`, (error, folder) => {
        folder.forEach((subfolder) => {
            fs.readdir(`./Comandos/${subfolder}/`, (error, files) => {
                files.forEach((file) => {
                    if (!file?.endsWith(".js")) return
                    const command = require(`../Comandos/${subfolder}/${file}`)
                    if (!command?.name) return
                    client.slashCommands.set(command.name, command)

                    SlashsArray.push(command)
                })
            })
        })
    })

    client.on("ready", async () => {
        await client.application.commands.set(SlashsArray)
    })
}
