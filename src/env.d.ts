/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

type ENV = {
  MY_VARIABLE: string;
};

type Runtime = import("@astrojs/cloudflare").DirectoryRuntime<Env>;
declare namespace App {
	interface Locals extends Runtime {}
}