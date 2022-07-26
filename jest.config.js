module.exports = {
  preset: "ts-jest",
  roots: ["<rootDir>/src"],
  modulePaths: ["<rootDir>/src"],
  collectCoverage: true,
  transform: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(css|less)$": "identity-obj-proxy",
    "^.+\\js$": "babel-jest",
  },
  // on node 14.x coverage provider v8 offers good speed and more or less good report
  coverageProvider: "v8",
  moduleNameMapper: {
    "^@root(.*)$": "<rootDir>/src$1",
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@pages(.*)$": "<rootDir>/src/pages/$1",
  },
  // Add more setup options before each test is run
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
  setupFilesAfterEnv: ["./setupTests.ts"],
  transform: {
    // Use babel-jest to transpile tests with the next/babel preset
    // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx|ts)$",
  testEnvironment: "jsdom",
  moduleDirectories: ["node_modules", "bower_components", "shared", "src"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
