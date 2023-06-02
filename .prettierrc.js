'use strict';

module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: false,
  jsxBracketSameLine: true,
  importOrder: [
    '^[./]',
    '<THIRD_PARTY_MODULES>',
    '^@components/(.*)$',
    '^@sections/(.*)$',
    '^@pages/(.*)$',
    '^@styles/(.*)$',
    '^@public/(.*)$',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
