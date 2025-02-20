// implementation taken from cobalt @ https://github.com/imputnet/cobalt

import type { RecursivePartial } from "$lib/types/generic"
import type { SettingsV1 } from "$lib/types/settings/v1"

export * from "$lib/types/settings/v1";

export type Settings = SettingsV1;

export type AnySettings = SettingsV1;

export type PartialSettings = RecursivePartial<Settings>;

export type AllPartialSettingsWithSchema = RecursivePartial<AnySettings> & { schemaVersion: number };
