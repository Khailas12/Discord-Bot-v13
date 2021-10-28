import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";


export default {
    category: 'Testing',
    description: 'Sends an embed',

    permissions: ['ADMINISTRATOR'],
    callback: async ({ message, text }) => {
//         const json = JSON.parse(text)
//         const embed = new MessageEmbed(json)
//         return embed
//     },
// } as ICommand

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

        // this edits the title after 3 secs of msg sent.
        const newMessage = await message.reply({
            embeds: [embed]
        });
        
        // waits for 3 secs
        await new Promise((resolve) => setTimeout(resolve, 5000))

        const newEmbed = newMessage.embeds[0]
        newEmbed.setTitle('Edited title');

        newMessage.edit({
            embeds: [newEmbed],
        })
    },
} as ICommand