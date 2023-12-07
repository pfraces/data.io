# data.io

Create, organize, and visualize data.

## Getting Started

Launch a local instance of the project with `npm start`.

## Build

Having `dataio` and `dataio.github.io` repositories in the same folder, go to the
`dataio` root and execute the following commands from a bash terminal:

```sh
npm run build
cd ../dataio.github.io/
rm -rf static
cp -r ../dataio/build/. .
```

Once the new build is in place, commit and push the changes to production.
