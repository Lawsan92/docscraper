/** @type {import('jest').Config} */
const config = {
  verbose: true,
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "babel-jest"
  },
  modulePathIgnorePatterns: ['<rootDir>/server/routes/test.js'],
};

module.exports = config;