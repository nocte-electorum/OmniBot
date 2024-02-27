// Define the blueprint contained in every command file
export class Command {
  // Properties (private, create getters)
  private _name: string;           // name of the command, showed in help
  private _description: string;    // description of command, showed in help
  private _takes_args: boolean;    // does this command need arguments?
  private _targeted: boolean;      // does this command target a user as its first argument?
  private _self_allowed: boolean;  // if yes to above, can the target be the caller?
  private _aliases: string[];      // other command names for this command
  private _hier: boolean;          // short for hierarchichal, should role rank matter for target?

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

  // Getters and setters
  public get name(): string {
      return this._name;
  }
  public set name(value: string) {
      this._name = value;
  }

  public get description(): string {
      return this._description;
  }
  public set description(value: string) {
      this._description = value;
  }

  public get takes_args(): boolean {
      return this._takes_args;
  }
  public set takes_args(value: boolean) {
      this._takes_args = value;
  }

  public get targeted(): boolean {
      return this._targeted;
  }
  public set targeted(value: boolean) {
      this._targeted = value;
  }

  public get self_allowed(): boolean {
      return this._self_allowed;
  }
  public set self_allowed(value: boolean) {
      this._self_allowed = value;
  }

  public get aliases(): string[] {
      return this._aliases;
  }
  public set aliases(value: string[]) {
      this._aliases = value;
  }

  public get hier(): boolean {
      return this._hier;
  }
  public set hier(value: boolean) {
      this._hier = value;
  }
}
