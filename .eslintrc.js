module.exports = {
    "env": {
        "node": true,
        "es6": true
    },
    "extends": [
        "standard",
        "plugin:react/recommended",
        "prettier",
        "prettier/react",
        "prettier/standard"
    ],
    "plugins": [
        "react",
        "prettier",
        "standard"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "prettier/prettier" : [
            "error",
            {"tabWidth": 4}
        ],
        "indent": ["error", 4, {"SwitchCase": 1}]
    }
};
