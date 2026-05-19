import { defineConfig } from "vite"

export default defineConfig({
  server: {
    host: true,
    allowedHosts: [
      "phoenix.tailcd7378.ts.net"
    ]
  }
})