module.exports = {
  verbose: true,
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
      useESM: true,
      babelConfig: true,
    }
  },
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.(t|j)sx?$': 'ts-jest',
  },
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: [
    "**/?(*.)(test).{ts,tsx}"
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },
  moduleDirectories: ['node_modules', '<rootDir>'],
}
