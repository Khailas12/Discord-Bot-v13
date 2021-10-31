import { ICommand } from "wokcommands";
import { Message } from 'discord.js';


export default {
    category: 'Testing',
    description: 'Testing',

    callback: ({ message, channel }) => {
        message.reply('Enter your username: ')

        const filter = (m: Message) => {
            return m.author.id === message.author.id
        }

        const collector = channel.createMessageCollector({
            filter, 
            max: 1,     // no. of msgs
            time: 1000 * 5  // 5 secs
        });

        collector.on('collect', message => {
            console.log(message.content)
        })
        collector.on('end', collected => {
            if (collected.size === 0) {
                message.reply('You did not provide your username')
                return
            }
            let text = 'Collected:\n\n'

            collected.forEach((message) => {
            text += `${message.content}\n`
            })
            message.reply(text)
        })
    }

} as ICommand