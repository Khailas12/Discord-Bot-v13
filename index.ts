import DiscordJS, { Intents, MessageFlags } from 'discord.js'
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

    const guildId = String(process.env.GUILD_ID);
    const guild = client.guilds.cache.get(guildId);

    let commands;

    if (guild) {
        commands = guild.commands;
    } else {
        commands = client.application?.commands;
    }
    commands?.create({
        name: 'bruce',
        description: 'Resplies with hey',
    })
})


client.on('interactionCreate', async (interation) => {
    if (!interation.isCommand()) {
        return
    }

    const { commandName, options } = interation;
})


client.on('messageCreate', (message) => {
    if (message.content == 'hey') {
        message.reply({
            content: 'wadup?',
        })
    }
})

client.login(process.env.BOT_TOKEN)