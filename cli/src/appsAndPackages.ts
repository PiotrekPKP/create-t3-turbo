export enum App {
  NEXTJS = "nextjs",
  EXPO = "expo",
}

export enum Package {
  API = "api",
  AUTH = "auth",
  DB = "db",
  CONFIG = "config",
}

export const DEFAULT_APPS = [App.NEXTJS, App.EXPO];
export const DEFAULT_PACKAGES = [
  Package.API,
  Package.AUTH,
  Package.DB,
  Package.CONFIG,
];

export const REQUIRED_APPS = [App.NEXTJS];
export const REQUIRED_PACKAGES = [
  Package.API,
  Package.AUTH,
  Package.DB,
  Package.CONFIG,
];

export const availableApps = Object.values(App) as App[];
export const availablePackages = Object.values(Package) as Package[];
