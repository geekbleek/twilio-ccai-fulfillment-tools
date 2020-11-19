# Twilio Contact Centre AI Fulfillment Tools

A collection of tools to make writing Twilio Contact Centre AI Fulfillment a dream.

## Usage

Run `npm install twilio-ccai-fulfillment-tools` or `yarn add twilio-ccai-fulfillment-tools`. Et voila!

Don't forget to check the [Changelog](CHANGELOG.md) for new features and fixes!

## Demo Repository

See the [Owl Insurance](https://github.com/DVELP/owl-insurance) repository for an example that uses this package.

## Development

All the source code is contained in the [src](src) folder. Run `npm ci` from the root of this repo to install dependencies, and get-a-developing!

This repository uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) to automatically generate a changelog and semver version bumping. Very simply, this means your commits should be atomic, and fall in the pattern of:

```
chore|fix|feat(!): Very short description of what you've done
```

-   `chore` commits don't cause changelog entries
-   `fix` commits cause patch version bumps, and are entered into the changelog
-   `feat` (feature) commits cause minor version bumps, and are entered into the changelog
-   `!` before the `:` denotes a breaking change (regardless of the commit type), and is entered into the changelog

Some examples:

```
chore: Updated Readme
fix: Fixed some non-breaking bug
fix!: Changed the contract of a function to fix a bug
feat: Added new functionality
feat!: Added new functionality that breaks some old funtionality
```

## Publishing

_Prereq:_ You must first be a part of the DVELP NPM group (see the [DVELP System Admins](https://github.com/DVELP/cookbook/blob/master/handbook/information-security/access-control.md#deputy-system-admins) for who can action this)

Simple run `npm run rpp` (release, push, publish) from the root of this folder. This will build the tools (including changelog and version bumping), tag it, push it to the repo, and finally publish it to the NPM group.

## License

[![DVELP logo](https://raw.githubusercontent.com/DVELP/cookbook/master/assets/dvelp-logo.png 'DVELP logo')](http://dvelp.co.uk)

This toolset was created and is maintained by DVELP Ltd.

If you like what you see and would like to hire us or join us, [get in touch](http://dvelp.co.uk)!
