import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";


export default {
    category: 'Testing',
    description: 'Sends an embed',

    permissions: ['ADMINISTRATOR'],
    callback: ({ message, text }) => {
        const embed = new MessageEmbed()
            .setTitle("Hi, I'm DONA")
            .setDescription('Hello')
            .setColor('BLUE')
            .setFooter("Have a good one")
            .setFields([
            {
                name: 'name',
                value: 'value',
                inline: true, 
            }, 
            
            {
                name: 'name two',
                value: 'value two',
                inline: true,
            },
        ])
        .addField('name three', 'value three')
            
        return embed
    }
} as ICommand