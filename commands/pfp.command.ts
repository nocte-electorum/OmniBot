import { Command } from '../command'

const pfp: Command = new Command({ 
    name:"pfp",
    description:"print the pfp of the mentioned user",
    takes_args: true,
    targeted: true,
    self_allowed: true
});



export default pfp