#!/usr/bin/env bash
set -e

# Run ESLint on Loris modules
./node_modules/eslint/bin/eslint.js modules/

# Run ESLint on generic React components
./node_modules/eslint/bin/eslint.js eslint jsx/

# Run ESLint on specific scripts
./node_modules/eslint/bin/eslint.js eslint htdocs/js/jquery.dynamictable.js
./node_modules/eslint/bin/eslint.js eslint htdocs/js/util/
./node_modules/eslint/bin/eslint.js eslint Gruntfile.js
