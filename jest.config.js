module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv:["@testing-library/jest-dom/extend-expect"],
    transform: {
      '^.+\\.tsx?$': 'ts-jest',"node_modules/variables/.+\\.(j|t)sx?$": "ts-jest"
    },
    "transformIgnorePatterns": [
        "node_modules/(?!variables/.*)"
      ],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
        '\\.scss$': 'jest-css-modules',
      },
      
  };
  