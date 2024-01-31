# eslint-config-next bug repro

## Instructions

Clone repo, then

```sh
npm install

# works
eslint --config default.json index.tsx

# doesn't work
eslint --config next.json index.tsx
# The prop value with an expression type of TSSatisfiesExpression could not be resolved. Please file an issue ( https://github.com/jsx-eslint/jsx-ast-utils/issues/new ) to get this fixed immediately.
```
