module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
      "react/jsx-indent": ["error", 2],
      "react/jsx-indent-props": ["error", 2]
    }
}
