export enum App {
  NEXTJS = "nextjs",
  EXPO = "expo",
  CHORME_EXTENSION = "chrome",
}

export enum Package {
  API = "api",
  AUTH = "auth",
  DB = "db",
  UI = "ui",
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
