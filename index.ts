import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
import path from 'path'
import WOKCommands from 'wokcommands'
import testSchema from './test-schema'
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
        testServers: process.env.GUILD_ID,  // discord server ID
        botOwners: process.env.BOT_ID,
        // mongoUri: process.env.MONGO_URI,
    })

    setTimeout(async () => {
        await new testSchema({
            message: 'hi,'
        }).save()
    }, 1000)
})

client.login(process.env.BOT_TOKEN)