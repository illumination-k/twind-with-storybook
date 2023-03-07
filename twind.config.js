import { defineConfig } from '@twind/core'

/** @type {import('@twind/core').TwindUserConfig} */
export default defineConfig({
  /* @twind/with-next will use hashed class names in production by default
   * If you don't want this, uncomment the next line
   */
  // hash: false,
  presets: [
    "@twind/preset-tailwind",
    "@twind/preset-autoprefix",
  ]
})