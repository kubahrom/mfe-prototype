# MFE prototype

This prototype is part of a Master theses with focus on micro frontend applications. It's based on pnpm workspace monorepo using Rsbuild, Module Federation, TypeScript and React. Deployed on Amazon S3 Bucket with CloudFront.

## Structure

#### Host app

- Host is the main shell microfrontend, which is responsible for loading and displaying the other microfrontends.

#### Marketing app

- Marketing microfrontend is responsible for display all static pages and marketing content.

#### Auth app

- Auth microfrontend is responsible for handling login and signup functionalit, with providing needed API for checking for user state.

#### Dashboard app

- Dashboard microfrontend is prototype of real application which is in this case managing recipes of authenticated user.

## Built using

- [pnpm](https://pnpm.io/) - Efficient package manager with workspace support
- [TypeScript](https://www.typescriptlang.org/) - JavaScript type superset
- [Rsbuild](https://rsbuild.dev/) - Build tool
- [Module Federation](https://rsbuild.dev/) - Micro fronte
- [ReactJS](https://reactjs.org/) - Frontend framework
- [React Router](https://reactrouter.com/en/main) - Library for general routing & navigation
- [Tannstack Query](https://tanstack.com/query/latest) - Cache layer
- [MUI](https://mui.com/) - UI library
- [ESLint](https://eslint.org/) - Code linter
- [Prettier](https://prettier.io/) - Code formatter

## Usage

### 1. Env variables:

Copy a .env.example file in every app folder and update following

##### Host

```
DEV_PORT=3000
DEV_MARKETING_PORT=3001
DEV_AUTH_PORT=3002
DEV_DASHBOARD_PORT=3003
```

##### Marketing

```
DEV_PORT=3001
DEV_DASHBOARD_PORT=3003
```

##### Auth

###### Add firebase web app's configuration

```
DEV_PORT=3002
APP_FIREBASE_API_KEY=
APP_FIREBASE_AUTH_DOMAIN=
APP_FIREBASE_PROJECT_ID=
APP_FIREBASE_STORAGE_BUCKET=
APP_FIREBASE_MESSAGING_SENDER_ID=
APP_FIREBASE_APP_ID=
```

##### Dashboard

###### Add firebase web app's configuration

```
DEV_PORT=3003
APP_FIREBASE_API_KEY=
APP_FIREBASE_AUTH_DOMAIN=
APP_FIREBASE_PROJECT_ID=
APP_FIREBASE_STORAGE_BUCKET=
APP_FIREBASE_MESSAGING_SENDER_ID=
APP_FIREBASE_APP_ID=
```

### 2. Install dependencies

###### When using pnpm, it will automatically install all dependencies across whole monorepo

```
pnpm install
```

### 3. Run scripts

All applications can be started up with commands bellow. Or they can be started one at a time. Individual applications should be available on the specified ports.\
\
Prebuild shared packages across monorepo (needed step before running build or dev)

```
pnpm prepare
```

Run all apps in parallel

```
pnpm dev
```

Combine prepare and dev run script so it can be started up by one command

```
pnpm start
```

Build all apps across monorepo

```
pnpm build
```

Delete all built apps across monorepo

```
pnpm clean
```

## Deploy

When you would want to deploy the applications on the Amazon S3 Bucket with CloudFront you would need to add theese Github repository secrets listed bellow:

```
// Firebase web app's configuration
APP_FIREBASE_API_KEY=
APP_FIREBASE_APP_ID=
APP_FIREBASE_AUTH_DOMAIN=
APP_FIREBASE_MESSAGING_SENDER_ID=
APP_FIREBASE_PROJECT_ID=
APP_FIREBASE_STORAGE_BUCKET=

// AWS S3, CloudFront and IAM
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=
AWS_CLOUDFRONT_DISTRIBUTION_ID=
AWS_S3_BUCKET_NAME=

PRODUCTION_DOMAIN=
```

## Screenshots

![Host APP](/screenshots/mfe-host.png)
![Marketing APP](/screenshots/mfe-marketing.png)
![Auth APP](/screenshots/mfe-auth.png)
![Dashboard APP](/screenshots/mfe-dashboard.png)
