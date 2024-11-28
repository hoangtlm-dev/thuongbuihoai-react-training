# OVERVIEW
- This document provides a detailed estimate of the React query Practice

## FEATURES (10 days)
- User can login with email, password
- User can see list products in Home page
- User can show more products in Home page (offset: 6 products, limit: 3)
- User can see Product details page when click on each product in Home page
- User can add/update/delete cart products

## UPDATE FEATURES (4 days)
- User can add/update/delete cart products with call api

## DESIGN
- [UI](https://www.figma.com/file/szgvNWlyqFUqgDTDTeLl9p/SOPA-E-Commerce-Website-UI-KIT-(Community)?type=design&node-id=10-2&mode=design&t=hPieyB5mLcmMJZQk-0)

## TIMELINE
- Estimate time: [14 working days](https://docs.google.com/document/d/1XpJJAkSAbfo5S5jrJW0uuXG6SwhtP1zD/edit)

## TEAM SIZE
- 1 dev

## TECHNICAL STACK
- React latest version
- React query
- React-hook-form
- Zustand

## TARGETS
- Understand  React query, React-hook-form, Zustand
- Unit test
- Storybook
- Improve PageSpeed for Page

## EDITOR
- Visual Studio Code

## DEVELOP TOOLS
- [Mock API](https://mockapi.io/): A service that allows you to simulate and test API responses in a controlled manner.
- [Storybook](https://storybook.js.org/): A tool for developing UI components in isolation, providing a sandbox environment for your components.
- [Vite](https://vitejs.dev/): is a build tool that aims to provide a faster and leaner development experience for modern web projects.
- [Eslint](https://eslint.org/): statically analyzes code to quickly find problems. It is built into most text editors and developers can run ESLint as part of your continuous integration pipeline.
- [Husky](https://typicode.github.io): improves your commits and more! You can use it to lint your commit messages, run tests, lint code, etc... when you commit or push. Husky supports all Git hooks.
- [Commitlint](https://commitlint.js.org/): supports checking a commit convention. By supporting npm-installed configurations it makes sharing of commit conventions easy.
- [Prettier](https://prettier.io/): removes all original styling\* and ensures that all outputted code conforms to a consistent style.

## PREREQUISITES
- Install pnpm **(Node.js is preinstalled)**
```
  On Linux or macOS:
    curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm
```
```
  On Windows (PowerShell):
  Invoke-WebRequest 'https://get.pnpm.io/v6.16.js' -UseBasicParsing -o pnpm.js; node pnpm.js add --global pnpm; Remove-Item pnpm.js
```
```
  Using npm:
  npm install -g pnpm
```

## RUN
```
- Clone project:
- git clone git@gitlab.asoft-python.com:thuong.buihoai/react-training.git
- cd react-training
- git checkout practice-sopa-management
- cd sopa-management
```

```
- create .env file:
- VITE_BASE_URL=https://sopa-management.onrender.com
```

```
- email: example@gmail.com
- password: 123456
```

```
- Install dependencies : pnpm install
- Run app: pnpm dev
- Open on web: http://127.0.0.1:5173/
- Run storybook: pnpm storybook
- View story book on web: http://localhost:6006/
```
