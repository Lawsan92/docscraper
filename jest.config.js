/** @type {import('jest').Config} */
const config = {
  verbose: true,
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "babel-jest"
  }
};

module.exports = config;