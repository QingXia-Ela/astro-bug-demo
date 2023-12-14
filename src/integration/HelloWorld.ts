import type { AstroIntegration } from "astro";

export default function (): AstroIntegration {
  return {
    "name": "hello-world",
    "hooks": {
      "astro:build:done"() {
        console.log("Hello, World!");
      }
    }
  }
}