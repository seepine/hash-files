const github = require('eslint-plugin-github').default

module.exports = [
  {
    ignores: [
      'dist/**',
      'lib/**',
      'node_modules/**',
      'jest.config.js',
      '__tests__/**'
    ]
  },
  github.getFlatConfigs().recommended,
  ...github.getFlatConfigs().typescript,
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname
      }
    },
    rules: {
      'i18n-text/no-en': 'off',
      'eslint-comments/no-use': 'off',
      'import/no-namespace': 'off',
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {accessibility: 'no-public'}
      ],
      '@typescript-eslint/consistent-type-assertions': 'error',
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        {allowExpressions: true}
      ],
      'func-call-spacing': ['error', 'never'],
      '@typescript-eslint/no-extraneous-class': 'error',
      '@typescript-eslint/no-inferrable-types': 'error',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
      '@typescript-eslint/no-useless-constructor': 'error',
      '@typescript-eslint/prefer-for-of': 'warn',
      '@typescript-eslint/prefer-function-type': 'warn',
      '@typescript-eslint/prefer-includes': 'error',
      '@typescript-eslint/prefer-string-starts-ends-with': 'error',
      '@typescript-eslint/promise-function-async': 'error',
      '@typescript-eslint/require-array-sort-compare': 'error',
      '@typescript-eslint/restrict-plus-operands': 'error',
      '@typescript-eslint/unbound-method': 'error',
      semi: ['error', 'never']
    }
  }
]
