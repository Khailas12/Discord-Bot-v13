import { ICommand } from 'wokcommands';

// this allows to use both ! and / commands
// !ping or /ping
export default {
    category: 'Testing',
    description: 'Replies with Hello',

    slash: 'both',
    testOnly: true,

    callback: ({}) => {
        return 'Hello'
    },
} as ICommand