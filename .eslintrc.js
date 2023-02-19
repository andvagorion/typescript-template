module.exports = {
    env: {
        browser: true,
        es2022: true
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest"
    },
    plugins: [
        "@typescript-eslint"
    ],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ]
};