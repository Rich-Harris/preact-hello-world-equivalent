# hello world

https://hello-svelte-zmxsujuehb.now.sh/

Just a quick test to see how small we can get a 'Hello world' app. With the current version of Svelte (1.13.1), we're at 1.1kb gzipped, compared to Preact's ~~8.7kb~~ 4.8kb*. Note that it's partly due to this app using Rollup over Webpack.

Svelte's tooling isn't nearly as mature as Preact's — there's no `create-svelte-app` yet. Instead, clone this repo, then

```bash
npm install
npm run dev
```

then go to [localhost:8080](http://localhost:8080).

*The 8.7kb includes the polyfills that create-react-app injects. You can remove them by doing `npm run eject` and manually editing the webpack config