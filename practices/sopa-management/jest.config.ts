import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  verbose: true,
  transform: {
    '.+\\.(css|less|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'jest-transform-stub'
  },
  moduleNameMapper: {
    '^@root(.*)$': '<rootDir>/src$1',
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@assets(.*)$': '<rootDir>/src/assets$1',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@common(.*)$': '<rootDir>/src/components/common$1',
    '^@constants(.*)$': '<rootDir>/src/constants$1',
    '^@helpers(.*)$': '<rootDir>/src/helpers$1',
    '^@hooks(.*)$': '<rootDir>/src/hooks$1',
    '^@services(.*)$': '<rootDir>/src/services$1',
    '^@interfaces(.*)$': '<rootDir>/src/interfaces$1',
    '^@pages(.*)$': '<rootDir>/src/pages$1',
    '^@layouts(.*)$': '<rootDir>/src/layouts$1',
    '^@stores(.*)$': '<rootDir>/src/stores$1',
    '^@mocks(.*)$': '<rootDir>/src/__mocks__$1',
    '^@app(.*)$': '<rootDir>/App$1'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(tsx|ts)$',
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', 'bower_components', 'shared', 'src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePaths: ['node_modules', '<rootDir>/src', '/shared/vendor/modules'],
  transformIgnorePatterns: [
    '/node_modules/(?!antd|@ant-design|rc-.+?|@babel/runtime).+(js|jsx)$'
  ],
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!**/*main.tsx',
    '!**/*.stories.tsx',
    '!**/node_modules/**',
    '!<rootDir>/dist/**',
    '!<rootDir>/.storybook/**',
    '!<rootDir>/storybook-static/**',
    '!<rootDir>/*.config.js',
    '!<rootDir>/coverage/**',
    '!<rootDir>/public/**',
    '!**/*.config.ts'
  ]
};

module.exports = config;
