# React Practice 3

# OVERVIEW
- This document provides a detailed estimate plan of the React practice 3

# TECHNICAL
- HTML5/CSS3
- TypeScript
- React
- Vite

# TARGET
- Understand how to use context, useReducer for state management
- Understand how to use SWR for fetching data
- Understand how to write unit tests for components

# REQUIREMENT
- Adding more features for practice 2
  - User adds & deletes a product
  - User deletes a product
  - User opens product detail page
  - User edits product information in product detail page
  - Product data will be kept when refresh the page
- Apply useContext and useReducer for state management
- Apply SWR for fetching data - from a simple json-server
- Unit test coverage should greater than 80%

# MAIN FEATURE
- Create a furniture item
- Delete a furniture item
- View detail furniture information
- Edit furniture information
- Filter furniture by categories and brand

# MAIN COMPONENT
- Header
- Footer
- Product Items
- Product Detail
- Filter Component

# TIMELINE
- 10 days (May 27, 2022 to July 10, 2022) [Estimation time](https://docs.google.com/document/u/2/d/1h0r3CQPYJ5bXPt9s8JliVdfHOPam_uq-JWzGUM2DVPM/edit?urp=gmail_link#heading=h.qtb0qbofjj5j)

# PREREQUISITES
```
- Install pnpm **(Node.js is preinstalled)**
  - On Linux or macOS:
      curl -f https://get.pnpm.io/v6.16.js | node - add --global pnpm
  - On Windows (PowerShell):
      Invoke-WebRequest 'https://get.pnpm.io/v6.16.js' -UseBasicParsing -o pnpm.js; node pnpm.js add --global pnpm; Remove-Item pnpm.js
  - Using npm:
      npm install -g pnpm
```

# RUN
```
- Clone project: 
- git clone git@gitlab.asoft-python.com:thuong.buihoai/react-training.git
- cd react-training
- git checkout feature/react-practice-3
- Install dependencies : pnpm install
- Run server: pnpm run server
- Run app: pnpm dev
- Open on web: http://localhost:3000/
- Run story book: pnpm storybook
- View story book on web: http://localhost:6006/
```