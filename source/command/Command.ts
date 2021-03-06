import { Terminal } from "terminal-kit";
import Message from "../utils/messages/MessageConstants";
const term: Terminal = require( 'terminal-kit' ).terminal;

export interface Command {
  execute(): void;
  setArguments(commandArguments: string[]): void;
}

export abstract class AbstractCommand implements Command {
  protected arguments: string[];
  private nextCommand: AbstractCommand;

  constructor(commandArguments: string[]) {
    commandArguments.splice(0, 2);
    this.arguments = commandArguments;
  }

  public setArguments(commandArguments: string[]) {
    this.arguments = commandArguments;
  }

  protected hasArguments(): boolean {
    return Boolean(this.arguments.length)
  }

  protected setNextCommand(command: AbstractCommand) {
    this.nextCommand = command;
  }

  private hasNextCommand(): boolean {
    return Boolean(this.nextCommand);
  }

  public execute(): void {
    term.brightCyan(`#####################################\n`);
    if(this.hasNextCommand()) {
      this.nextCommand.execute();
    }
  }
}