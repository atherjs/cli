import { Command, CommanderCommand } from "../Command";
import { rollbackMigrations } from "./migrate/rollbackMigrations";

export default class RollbackMigrationsCommand extends Command {
  signature = "migrate:rollback";
  description = "Roll back the latest batch of migrations";

  async handle(): Promise<void> {
    try {
      await rollbackMigrations();
      process.exit(0);
    } catch (error) {
      console.error("Error rolling back migrations:", error);
    }
  }

  protected configureCommand(command: CommanderCommand): void {
    // No additional options required for this command
  }
}
