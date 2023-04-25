import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  verbose: true,
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },
  moduleNameMapper: {
    "^@root(.*)$": "<rootDir>/src$1",
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@components(.*)$": "<rootDir>/src/components$1",
    "^@pages(.*)$": "<rootDir>/src/pages$1",
    "^@context(.*)$": "<rootDir>/src/context$1",
    "^@hooks(.*)$": "<rootDir>/src/hooks$1",
    "^@constants(.*)$": "<rootDir>/src/constants$1",
    "^@helpers(.*)$": "<rootDir>/src/helpers$1",
    "^@reducer(.*)$": "<rootDir>/src/reducer$1",
    "^@assets(.*)$": "<rootDir>/src/assets$1",
    "^@app(.*)$": "<rootDir>/src/app$1",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx|ts)$",
  testEnvironment: "jsdom",
  moduleDirectories: [
    "node_modules",
    "bower_components",
    "shared",
    "src",
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  modulePaths: ["node_modules", "<rootDir>/src"],
};

module.exports = config;
