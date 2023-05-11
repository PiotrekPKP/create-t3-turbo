import { Command } from "commander";

import {
  App,
  DEFAULT_APPS,
  DEFAULT_PACKAGES,
  Package,
} from "./appsAndPackages.js";
import { CREATE_TURBO_APP, DEFAULT_APP_NAME } from "./consts.js";
import { renderTitle } from "./utils/renderTitle.js";

interface CliResults {
  appName: string;
  apps: App[];
  packages: Package[];
}

const defaultOptions: CliResults = {
  appName: DEFAULT_APP_NAME,
  apps: DEFAULT_APPS,
  packages: DEFAULT_PACKAGES,
};

const main = async () => {
  renderTitle();

  const program = new Command()
    .name(CREATE_TURBO_APP)
    .description("A CLI for creating application monorepos with the t3 stack");

  const options = defaultOptions;
};

await main();
