/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  modulePathIgnorePatterns: ["server"],
  moduleNameMapper: {
    "react-day-picker/dist/style.css": "<rootDir>/src/mocks/styleMock.ts",
    "react-markdown":
      "<rootDir>/node_modules/react-markdown/react-markdown.min.js",
  },
  resolver: `${__dirname}/src/test/resolver.js`,
  transform: {
    ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform",
    "node_modules/.+\\.(js|jsx)$": "babel-jest",
  },
  setupFilesAfterEnv: ["./setupTests.ts"],
  // testURL: "http://localhost:3000",
  testEnvironmentOptions: {
    url: "http://localhost:3000",
  },
};
