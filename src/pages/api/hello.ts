
import type { APIContext } from "astro";

export async function GET({locals}: APIContext) {
  // the type KVNamespace comes from the @cloudflare/workers-types package
  const { DEFAULT_GREETING } = locals.runtime.env;
  
  return new Response(DEFAULT_GREETING);
};