import DiscordJS, {Intents, MessageFlags} from 'discord.js'
import dotenv from 'dotenv'


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
})


client.on('messageCreate', (message) => {
    if (message.content == 'hey') {
        message.reply({
            content: 'wadup?',
        })
    }
})

client.login(process.env.BOT_TOKEN)