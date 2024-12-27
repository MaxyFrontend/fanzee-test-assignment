import { FlatCompat } from '@eslint/eslintrc'
import ESLint from '@eslint/js'
import Vue from 'eslint-plugin-vue'
import ESLintConfigPrettier from '@vue/eslint-config-prettier'
import globals from 'globals'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import vueTsEslintConfig from '@vue/eslint-config-typescript'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const compat = new FlatCompat({ baseDirectory: __dirname })

export default [
    {
        // config with just ignores is the replacement for `.eslintignore`
        ignores: ['{dist,public}/**/*']
    },
    ESLint.configs.recommended,
    ESLintConfigPrettier,
    ...Vue.configs['flat/recommended'],
    // uncomment next line for TypeScript project
    ...vueTsEslintConfig(),
    ...compat.extends('@vue/eslint-config-prettier/skip-formatting'),
    {
        files: ['**/*.{js,mjs,cjs,jsx,vue}'], // append `ts,mts,cts,tsx` for TypeScript project
        linterOptions: {
            reportUnusedDisableDirectives: true
        },
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.browser,
                ...globals.es2021
            }
        },
        plugins: {},
        rules: {
            quotes: ['error', 'single', { avoidEscape: true }],
            'vue/multi-word-component-names': 'off',
            'vue/no-v-html': 'off',
            'no-console':
                process.env.NODE_ENV === 'production' ? 'error' : 'off',
            'no-debugger':
                process.env.NODE_ENV === 'production' ? 'error' : 'off'
        }
    }
]
