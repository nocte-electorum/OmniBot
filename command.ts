// Define the blueprint contained in every command file
export class Command {
  // Properties (private, create getters)
  private name: string;           // name of the command, showed in help
  private description: string;    // description of command, showed in help
  private takes_args: boolean;    // does this command need arguments?
  private targeted: boolean;      // does this command target a user as its first argument?
  private self_allowed: boolean;  // if yes to above, can the target be the caller?
  private aliases: string[];      // other command names for this command
  private hier: boolean;          // short for hierarchichal, should role rank matter for target?

  // Function called when `new Command()` is called
  // This constructor takes an object of properties,
  // utilizing `prop || default` to provide defaults in
  // case of undefined (omitted) values
  constructor(props: {
    name?: string;
    description?: string;
    takes_args?: boolean;
    targeted?: boolean;
    self_allowed?: boolean;
    aliases?: string[];
    hier?: boolean;
  }) {
    this.name = props.name || "";
    this.description = props.description || "";
    this.takes_args = props.takes_args || false;
    this.targeted = props.targeted || false;
    this.self_allowed = props.self_allowed || false;
    this.aliases = props.aliases || [];
    this.hier = props.hier || false;
  }
}
