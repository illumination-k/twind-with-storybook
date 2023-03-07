import { defineConfig } from '@twind/core'
import presetAutoprefix from "@twind/preset-autoprefix";
import presetTailwind from "@twind/preset-tailwind";


/** @type {import('@twind/core').TwindUserConfig} */
export default defineConfig({
  /* @twind/with-next will use hashed class names in production by default
   * If you don't want this, uncomment the next line
   */
  // hash: false,
  presets: [
    presetTailwind(),
    presetAutoprefix(),
  ]
})