module.exports = {
    'env': {
        'browser': true,
        'node': true,
        'jest': true
    },
    'extends': 'airbnb',
    'parser': 'babel-eslint',
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly',
        'shallow': true,
        'render': true,
        'mount': true
    },
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'plugins': ['react'],
    'rules': {
        'array-element-newline': 'off',
        'function-paren-newline': 'off',
        'import/extensions': 'off',  
        'import/no-extraneous-dependencies': 'off',
        'import/no-unresolved': 'off',
        'indent': 'off',
        'indent-legacy': 'off',
        'init-declarations': 'off',
        'linebreak-style': [
            'off',
            'windows'
        ],
        'max-len': 'error',
        'max-statements': 'off',
        'multiline-ternary': 'off',
        'newline-after-var': 'off',
        'newline-before-return': 'off',
        'no-console': 'off',
        'no-eq-null': 'off',
        'no-extra-parens': 'off',
        'no-magic-numbers': 'off',
        'no-param-reassign': 'off',
        'no-plusplus': 'off',
        'no-process-env': 'off',
        'no-ternary': 'off',
        'no-use-before-define': 'off',
        'padded-blocks': 'off',
        'quote-props': 'off',
        'react/prop-types': 'off',
        'require-jsdoc': 'off',
        'require-unicode-regexp': 'off',
        'sort-vars': 'error',
        'space-before-function-paren': 'off',
        'function-paren-newline': ['error', 'consistent'],
        'implicit-arrow-linebreak': 'off',
        'import/order': [
        'error',
        {
        'groups': [
        'builtin',
        'external',
        'internal',
        'parent',
        'sibling',
        'index'
        ],
        'newlines-between': 'always'
        }
        ],
        'jsx-a11y/anchor-is-valid': 'off',
        'lines-between-class-members': 'off',
        'object-curly-newline': ['error', { 'consistent': true }],
        'operator-linebreak': 'off',
        'react/destructuring-assignment': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/no-access-state-in-setstate':'off',
        'react/no-typos': 'off',
        'arrow-parens': 'off',
        'comma-dangle': 'off'
    }
};
