import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
import path from 'path'
import WOKCommands from 'wokcommands'


dotenv.config()

const client = new DiscordJS.Client({
    // itents tells the bot wt it intends to do info 
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});


// when bot is online
client.on('ready', () => {
    console.log('Bot is online');

    new WOKCommands(client, {
        commandDir: path.join(__dirname, 'commands'),
        typeScript: true,
        testServers: String(process.env.GUILD_ID),
    })
})

client.login(process.env.BOT_TOKEN)