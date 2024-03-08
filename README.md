# Requirements

Terem Technologies - Front End Test

### Summary

We are looking for a high attention to UI detail and component based design.
There is no need to spend more than four hours on this test, we do not expect the whole
test to be completed.

### Features

Search Bar:
Filters popular around you cards based on the title
Filter should update as you type
Filtering should be done client side

Popular around you:
This is a carousel
Data fetched from http://demo3136867.mockable.io/carousel

Featured:
This is not a carousel
Data fetched from http://demo3136867.mockable.io/featured

### Colours and Fonts

#e1e1e1 - Background, Card Border
#ffffff - Panel Background
#2f516d - Font Colour Primary
#899bb2 - Font Colour Secondary
#444444 - Carousel caret colour
font - any sans-serif

### Feature Priority

1. Popular around you
2. Search bar
3. (Bonus) Light/Dark mode

### What we’re primarily assessing

Bespoke carousel component design
Or
Pre-made carousel library with well considered testing

### Some other things we’ll be looking at

Code style
Organisation of styling
Use of modern language/tech features
Meaningful tests

### Submission

Git repository link (please do not send a zip); We prefer public GitHub repo’s
total time spent (approx.)
(Bonus) Have it deployed using something like Netlify/Vercel

### Lastly

We understand software engineering requires discourse. Whether it’s confirming
assumptions, clarification of acceptance criteria or general feedback, it’s all welcome.

# Leewyn's notes

### Overview

- This app was created using [Vite](https://vitejs.dev/).
- Type safety is enforced with Typescript
- Testing is mainly controlled via Vitest, but it also relies on React Testing Library and Jest.
- [Tailwind CSS](https://tailwindcss.com/docs/) is used for styling.
- [React Icons](https://react-icons.github.io/react-icons/) is used for icons.

### Setup

To get started, clone this repo to your local machine, open it up in Visual Studio code, and run the terminal command `npm install`

To start the app, run `npm run dev`

To test the app, run `npm run test` (NOTE: Running `npm run test` will also generate a code coverage report, providing a user-friendly HTML view of the test results. This file can be located at `/coverage/index.html` once `npm run test` is run).

To create a production build, run `npm run build`

To run the most recent production build, run `npm run preview` (NOTE: You need to first run `npm run build`) to create the production build.

### CI/CD & hosting

The app is built using GitHub Actions and a live demo is currently hosted as an Azure Static Web App located at [https://nice-water-0216d4200.5.azurestaticapps.net/](https://nice-water-0216d4200.5.azurestaticapps.net/)

### Shortcomings

The aim of this assessment is not to have a fully functional app; thus in order to save time, some items may not have been fully implemented, or may not be working 100%:

- The carousel caret colour has not been implemented because the 3rd-party carousel component `react-multi-carousel` is in use.
- API integration: There was an issue with the API's given in the spec, and so sample datasets from json files were created instead. However, facilities for APIs have been coded and commented out in the component (The `axios` library was used; an example of the usage can be found in the commented-out `useEffect` in the `<Home />` component).
- Similarly, images which should have been retrieved from an external source are instead referencing images in the public folder.
- The app is mostly mobile responsive, but it needs tweaking for optimum display at all resolutions.
- The dark mode feature is rather simplistic, only updating the background. In reality, every component needs to be dark-mode-aware, but such an implementation takes time. In my view, the dark-mode sample in code demonstrates what that overarching mechanism would look like.
- There's room for a lot of styling improvement and there are a few styling issues (e.g. long text overlaps in cards).
- One of the unit tests involving checking data rendered in the carousel is failing, which may be due to the carousel being a 3rd-party component. However, the presence of the test indicates the intention of what is to be tested; in a production app, all tests should pass before a task can be considered done.

### Other considerations

Due to the limited scope of this assessment, the following items have been purposefully omitted but are important to consider when getting an app production-ready:

- Routing
- Authentication
- Config in .env variables and in CI/CD pipeline
- Extensive unit testing
- Lazy loading & debouncing for performance improvements
- Analytics & SEO
