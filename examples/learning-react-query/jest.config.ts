import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  verbose: true,
  transform: {
    ".+\\.(css|less|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "jest-transform-stub",
  },
  moduleNameMapper: {
    "^@root(.*)$": "<rootDir>/src$1",
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@components(.*)$": "<rootDir>/src/components$1",
    "^@__mocks__(.*)$": "<rootDir>/src/__mocks__$1",
    "^@app(.*)$": "<rootDir>/App$1",
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
  modulePaths: ["node_modules", "<rootDir>/src", "/shared/vendor/modules"],
  transformIgnorePatterns: [
    "/node_modules/(?!antd|@ant-design|rc-.+?|@babel/runtime).+(js|jsx)$",
  ],
};

module.exports = config;
