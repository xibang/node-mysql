module.exports = {
  "env": {
    "node": true,
    "es6": true
  },
  "rules": {
    "quotes": [2, "single"],
    "semi": 2,
    "max-len": [1, 150, 2],
    "arrow-body-style": [1, "as-needed"],
    "comma-dangle": [2, "never"],
    "object-curly-spacing": 0,
    "no-console": 1,
    "generator-star-spacing": 0,
    "no-param-reassign": [1, { "props": false }],
    "consistent-return": 1
  },
  "extends": "airbnb"
};