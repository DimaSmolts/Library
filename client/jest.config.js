const { defaults } = require('jest-config');

module.exports = {
  roots: ["<rootDir>/src"],
  modulePathIgnorePatterns: ["<rootDir>/src/tests"],
  collectCoverage : true,
  coverageReporters: ["text", "lcov"],
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/coverage/**",
    "!**/dist/**",
    "!**/node_modules/**",
    "!<rootDir>/src/test-tools/**"
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: [...defaults.moduleFileExtensions,"ts", "tsx"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupTestFrameworkScriptFile: "<rootDir>/setupEnzyme.ts",
  moduleNameMapper: {
    "\\.(css|svg|ico|png)": "<rootDir>/src/test-tools/assetsMock.ts",
  }
}
