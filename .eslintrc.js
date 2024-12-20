module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'next/core-web-vitals',
    'prettier',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: ['prettier', '@typescript-eslint', 'jsx-a11y'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'tailwindcss/no-custom-classname': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-require-imports': 'off',
    // 'simple-import-sort/imports': [
    //   2,
    //   {
    //     groups: [
    //       ['^.+\\.s?css$'],
    //       [
    //         `^(${require('module').builtinModules.join('|')})(/|$)`,
    //         '^react',
    //         '^@?\\w',
    //       ],
    //       ['^components(/.*|$)'],
    //       ['^lib(/.*|$)', '^hooks(/.*|$)'],
    //       ['^\\.'],
    //     ],
    //   },
    // ],
    // Allow unused variables, but ignore specific patterns or allow unused arguments
    '@typescript-eslint/no-unused-vars': [
      'warn', // Or 'off' if you want to completely disable it
      {
        vars: 'all',
        args: 'none', // Ignore unused function arguments
        ignoreRestSiblings: true, // Ignore rest properties (e.g., `...rest`)
        varsIgnorePattern: '^_', // Ignore variables starting with an underscore
      },
    ],
  },
  settings: {
    tailwindcss: {
      callees: ['cn'],
      config: 'tailwind.config.js',
    },
  },
};
