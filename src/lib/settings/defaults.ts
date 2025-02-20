// implementation taken from cobalt @ https://github.com/imputnet/cobalt

import type { Settings } from "$lib/types/settings"

const defaultSettings: Settings ={
  schemaVersion: 1,
  debug: {
    threlteDebug: true,
  }
}

export default defaultSettings;
