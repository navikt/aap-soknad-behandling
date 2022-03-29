/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  modulePathIgnorePatterns: ["server"],
  moduleNameMapper: {
    "react-day-picker/dist/style.css": "<rootDir>/src/mocks/styleMock.ts",
  },
  transform: {
    ".+\\.(css|styl|less|sass|scss)$": "jest-css-modules-transform",
  },
  setupFilesAfterEnv: ["./setupTests.ts"],
  testURL: "http://localhost:3000",
};
