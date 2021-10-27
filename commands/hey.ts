import { ICommand } from 'wokcommands';

export default {
    category: 'Testing',
    description: 'Replies with Hello',
    
    // this allows to use both legacy ! and slash / commands.
    // !ping or /ping
    slash: 'both',
    testOnly: true,

    callback: ({}) => {
        return 'Hello'
    },
} as ICommand