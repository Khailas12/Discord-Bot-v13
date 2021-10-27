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
        name: 'hey',
        description: 'Replies with hey',
    })

    commands?.create({
        name: 'add',
        description: 'Adds two numbers',
        options: [
            {
                name: 'num1',
                description: 'First number',
                required: true,
                type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER,
            },
            {
                name: 'num2',
                description: 'Second number',
                required: true,
                type: DiscordJS.Constants.ApplicationCommandOptionTypes.NUMBER,
            }
        ]
    })
})


client.on('interactionCreate', async (interation) => {
    if (!interation.isCommand()) {
        return
    }

    const { commandName, options } = interation;

    if (commandName === 'hey') {
        interation.reply({
            content: 'pong',
            ephemeral: true,    // this makes the msg private from others to see
        })
    }
})


client.login(process.env.BOT_TOKEN)