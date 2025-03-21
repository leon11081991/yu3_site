import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginReact from 'eslint-plugin-react'
import typescriptPlugin from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'

export default [
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,

  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    languageOptions: {
      globals: globals.browser,
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin
    },
    rules: {
      "react/prop-types": "off",
      'react/react-in-jsx-scope': 'off',
      "no-unused-vars": "off", // 關閉 ESlint 的檢查，避免和 TypeScript 的檢查衝突
      '@typescript-eslint/no-unused-vars': 'error', // 開啟 TypeScript 的檢查
      '@typescript-eslint/no-explicit-any': 'warn'
    }
  }
] 