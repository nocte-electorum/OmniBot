// Import Discord message class just to type the 
// arguments in the actual command function
import { Message } from "discord.js";

// Define the blueprint contained in every command file
export class Command {
  // Properties (private, create getters)
  //
  private _name: string;           // name of the command, showed in help
  private _description: string;    // description of command, showed in help
  private _takesArgs: boolean;    // does this command need arguments?
  private _targeted: boolean;      // does this command target a user as its first argument?
  private _selfAllowed: boolean;  // if yes to above, can the target be the caller?
  private _aliases: string[];      // other command names for this command
  private _hier: boolean;          // short for hierarchichal, should role rank matter for target?
  public func: (msg: Message, args: string[]) => void;

  // Function called when `new Command()` is called
  // This constructor takes an object of properties,
  // utilizing `prop || default` to provide defaults in
  // case of undefined (omitted) values
  constructor(props: {
    name?: string;
    description?: string;
    takesArgs?: boolean;
    targeted?: boolean;
    selfAllowed?: boolean;
    aliases?: string[];
    hier?: boolean;
  }) {
    this._name = props.name || "";
    this._description = props.description || "";
    this._takesArgs = props.takesArgs || false;
    this._targeted = props.targeted || false;
    this._selfAllowed = props.selfAllowed || false;
    this._aliases = props.aliases || [];
    this._hier = props.hier || false;
    this.func = (): void => {};
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

  public get takesArgs(): boolean {
      return this._takesArgs;
  }
  public set takesArgs(value: boolean) {
      this._takesArgs = value;
  }

  public get targeted(): boolean {
      return this._targeted;
  }
  public set targeted(value: boolean) {
      this._targeted = value;
  }

  public get selfAllowed(): boolean {
      return this._selfAllowed;
  }
  public set selfAllowed(value: boolean) {
      this._selfAllowed = value;
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
