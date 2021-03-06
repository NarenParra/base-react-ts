module.exports = {
  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  roots: ['<rootDir>/src'],

  // Jest transformations -- this adds support for TypeScript
  // using ts-jest
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.svg$': 'jest-svg-transformer'
  },

  // Runs special logic, such as cleaning up components
  // when using React Testing Library and adds special
  // extended assertions to Jest
  setupFilesAfterEnv: [
    '@testing-library/react/dont-cleanup-after-each',
    '@testing-library/jest-dom/extend-expect',
  ],

  //support for scss modules
  moduleNameMapper: {
    '\\.module.(css|less|scss|sss|styl)$':
      '<rootDir>/node_modules/jest-css-modules',
    '\\.(svg)$': '<rootDir>/node_modules/jest-svg-transformer',
  },
  moduleDirectories: ["node_modules", "src"],
  // Test spec file resolution pattern
  // Matches parent folder `__tests__` and filename
  // should contain `test` or `spec`.
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',

  // Module file extensions for importing
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testResultsProcessor: "jest-sonar-reporter",
};
