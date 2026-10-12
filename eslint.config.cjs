const {
    defineConfig,
} = require("eslint/config");

const globals = require("globals");
const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([{
    languageOptions: {
        globals: {
            ...globals.jest,
            ...globals.node,
        },

        "sourceType": "module",
        parserOptions: {},
    },

    extends: [
        js.recommended,
    ],

    rules: {
        "import/prefer-default-export": "off",
        "no-void": "off",
        "no-param-reassign": "off",
        "no-multi-assign": "off",
        "no-bitwise": "off",
        "no-plusplus": "off",
        "import/extensions": "off",
        "max-len": "off",
        "brace-style": "off",
        "prefer-promise-reject-errors": "off",
        "class-methods-use-this": "off",
        "prefer-rest-params": "off",
        "prefer-spread": "off",
    },
}]);
