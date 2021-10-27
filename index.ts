import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
import path from 'path'
import WOKCommands from 'wokcommands'
import mongoose from 'mongoose'
// const mongoose = require('mongoose') -> in js

dotenv.config()

const client = new DiscordJS.Client({
    // itents tells the bot wt it intends to do info 
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_PRESENCES,
    ]
});

// when bot is online
client.on('ready', async () => {
    console.log('Bot is online');

    await mongoose.connect(String(process.env.MONGO_URI), {
            keepAlive: true,
        })   // connecting with mongodb

    new WOKCommands(client, {
        commandDir: path.join(__dirname, 'commands'),
        typeScript: true,
        testServers: String(process.env.GUILD_ID),  // discord server ID
        botOwners: String(process.env.BOT_ID),
    })
})

client.login(process.env.BOT_TOKEN)