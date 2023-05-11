import { Command } from "commander";
import inquirer from "inquirer";

import {
  App,
  DEFAULT_APPS,
  DEFAULT_PACKAGES,
  Package,
  REQUIRED_APPS,
  REQUIRED_PACKAGES,
  availableApps,
  availablePackages,
} from "./appsAndPackages.js";
import { CREATE_TURBO_APP, DEFAULT_APP_NAME } from "./consts.js";
import { renderTitle } from "./utils/renderTitle.js";
import { validateAppName } from "./utils/validateAppName.js";

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

  program
    .argument(
      "[dir]",
      "The name of the application, as well as the name of the directory to create",
    )
    .parse(process.argv);

  const cliProvidedName = program.args[0];

  if (cliProvidedName) {
    options.appName = cliProvidedName;
  } else {
    options.appName = await promptAppName();
  }

  options.apps = await promptApps();
  options.packages = await promptPackages();

  console.log(options);
};

const promptAppName = async (): Promise<string> => {
  const { appName } = await inquirer.prompt<Pick<CliResults, "appName">>({
    name: "appName",
    type: "input",
    message: "What will your project be called?",
    default: defaultOptions.appName,
    validate: validateAppName,
    transformer: (input: string) => {
      return input.trim();
    },
  });

  return appName;
};

const promptApps = async (): Promise<App[]> => {
  const { apps } = await inquirer.prompt<Pick<CliResults, "apps">>({
    name: "apps",
    type: "checkbox",
    message: "Which apps would you like to set up?",
    choices: availableApps.map((app) => ({
      name: app,
      checked: DEFAULT_APPS.includes(app),
      disabled: REQUIRED_APPS.includes(app),
    })),
  });

  return [...apps, ...REQUIRED_APPS];
};

const promptPackages = async (): Promise<Package[]> => {
  const { packages } = await inquirer.prompt<Pick<CliResults, "packages">>({
    name: "packages",
    type: "checkbox",
    message: "Which packages would you like to have?",
    choices: availablePackages.map((pkg) => ({
      name: pkg,
      checked: DEFAULT_PACKAGES.includes(pkg),
      disabled: REQUIRED_PACKAGES.includes(pkg),
    })),
  });

  return [...packages, ...REQUIRED_PACKAGES];
};

await main();
