// TODO: Migrate to Flat Config https://github.com/vercel/style-guide/issues/73
/** @type {import('eslint/lib/shared/types').ConfigData} */
module.exports = {
  ignorePatterns: ['dist/'],
  extends: ['@vercel/style-guide/eslint/node'].map((config) =>
    require.resolve(config),
  ),
  plugins: ['simple-import-sort', 'unused-imports'],
  rules: {
    // for simple-import-sort plugin
    'import/order': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    // for unused-imports plugin
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts'],
      extends: [
        '@vercel/style-guide/eslint/browser',
        '@vercel/style-guide/eslint/typescript',
      ].map((config) => require.resolve(config)),
      parserOptions: {
        project: true,
      },
      rules: {
        'unicorn/filename-case': [
          'error',
          {
            cases: {
              camelCase: true,
              pascalCase: true,
            },
          },
        ],
        'import/no-useless-path-segments': 'error',
        'import/order': 'off', // for simple-import-sort plugin
        '@typescript-eslint/no-unused-vars': 'off', // for unused-imports plugin
      },
    },
    {
      files: ['*.test.ts'],
      plugins: ['vitest'],
      extends: ['plugin:vitest/recommended'],
    },
    {
      files: ['./*.config.ts'],
      rules: {
        'import/no-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
