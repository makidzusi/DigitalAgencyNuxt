import { ru } from '@formkit/i18n'
import { DefaultConfigOptions } from '@formkit/vue'
import { createAutoAnimatePlugin } from '@formkit/addons'

const config: DefaultConfigOptions = {
  locales: { ru },
  locale: 'ru',
  plugins: [createAutoAnimatePlugin()]
}

export default config