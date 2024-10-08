import { Logger } from "@atherjs/ather";
import { Command } from "../Command";
import { installMigrations } from "./migrate/installMigrations";

export default class InstallMigrationsCommand extends Command {
  signature = "migrate:install";
  description = "Install the migrations table if it does not exist";

  async handle(): Promise<void> {
    try {
      await installMigrations();
      process.exit(0);
    } catch (error) {
      Logger.error("Error installing migrations table:", error);
    }
  }
}
