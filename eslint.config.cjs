const globals = require("globals");
const js = require("@eslint/js");

module.exports = [
    js.configs.recommended,
    {
        languageOptions: {
            globals: {
                ...globals.jest,
                ...globals.node,
            },

            sourceType: "module",
        },

        rules: {
            // eslint-plugin-import is not installed; its rules are removed
            // and can be restored by installing the plugin if needed.
            "no-void": "off",
            "no-param-reassign": "off",
            "no-multi-assign": "off",
            "no-bitwise": "off",
            "no-plusplus": "off",
            "max-len": "off",
            "brace-style": "off",
            "prefer-promise-reject-errors": "off",
            "class-methods-use-this": "off",
            "prefer-rest-params": "off",
            "prefer-spread": "off",
        },
    },
];
