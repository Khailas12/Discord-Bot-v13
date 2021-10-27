import { ICommand } from 'wokcommands';


export default {
    category: 'Testing',
    description: 'Replies with Hello',

    callback: ({ message }) => {
        message.reply('Hello')
    },
} as ICommand