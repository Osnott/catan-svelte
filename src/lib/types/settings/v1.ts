// implementation taken from cobalt @ https://github.com/imputnet/cobalt

type SettingsDebug = {
  threlteDebug: boolean,
}

export type SettingsV1 = {
  schemaVersion: 1,
  debug: SettingsDebug,
}
