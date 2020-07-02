# Typescript React Native Github Page

This is a skeleton project which allows anyone to develop their next Typescript-templeted React Native web app and have
it hosted through [Github Pages](https://pages.github.com). Whether you clone or fork this repo, you *must* have this
on a branch other than `master`, as that is currently the default branch it will use to deploy your app. Otherwise,
you're more than welcome to change things around to suit your preferences. Mostly everything is setup and ready to go,
with only the following remaining steps:

* replace `<website name>` and `<website slug>` in `app.json` with your preferred website name and slug
* replace `<username>` under the `homepage` field in `package.json` with your username. For example, since my username
is `theorangelego`, my link would look like `https://theorangelego.github.io/`
* replace `<license>` with your license of choice

### Running and Testing Locally

To start a local server and test out your web app, run `yarn web`.

### Deploying to Github Pages

Ready to deploy your website? Great! First run `yarn build`. This will generate your static website build at `web-build`
at the root of your project. Once done, you can run `yarn deploy`. This will move your built files to the `master`
branch and deploy directly to your Github Page.
