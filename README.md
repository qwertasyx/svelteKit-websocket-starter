# Getting started

This is a starting point for a svelteKit app with websocket (socket.io) support.
It also uses tailwindcss.

## Install dependencies

If you're seeing this, you've probably already done this step. Congrats!

```bash
npm install 
```

## Developing

Once you've  installed dependencies with `npm install`, start a development server:

```bash
npm run dev
```

## Building

To create a production version of your app:

```bash
npm run build
```

This will:
1. Bundle the backend.ts with `rollup --config`
2. Runs `vite build` 

You can preview the production build with `node ./dist/server.js`.

