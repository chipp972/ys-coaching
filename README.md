# YS coaching

## Setup

```bash
cp .env.example .env
# Fill the variables

echo "" > .npmrc
git update-index --assume-unchanged .npmrc

npm i
```

## Commands

```bash
npm start
```

Run a local server with the lambda functions

```bash
npm run build
```

Build the app with Gatsby and export to static files.

```bash
npm run format # Format files with prettier
npm run lint # Run eslint on files
npm run typecheck # Typecheck with typescript
```

Other available commands

## Gotchas

* Lambdas functions are not rebuilt if you modify a file outside of the `functions` folder.
