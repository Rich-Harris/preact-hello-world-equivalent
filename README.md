# hello world

Just a quick test to see how small we can get a 'Hello world' app. With the current version of Svelte (1.13.1), we're at 1.1kb gzipped, compared to Preact's 8.7kb (which is still really good!). Note that it's partly due to this app using Rollup over Webpack.

Svelte's tooling isn't nearly as mature as Preact's — there's no `create-svelte-app` yet. Instead, clone this repo, then

```bash
npm install
npm run dev
```

then go to [localhost:8080](http://localhost:8080).
