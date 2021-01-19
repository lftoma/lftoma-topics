# GitHub Topic Explorer

## Assignment:

Your task is to build a React web application that displays all the "[topics](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#topic)" related to the term "react", using the GitHub GraphQL API.

The application should display how many "[stargazers](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#stargazerconnection)" each topic has. A click on a topic should display the topics related to that topic, and how many stargazers they have. And so forth.

To interact with the Github GraphQL API you'll need to have

- a [Github API key](https://docs.github.com/en/free-pro-team@latest/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql)
- You'll want to make use of the key in the .env file within your application

You may use whatever React framework or library you find useful. URL routing is optional.

## Evaluation:

- We will pay particular attention to the way the code is organized, and to the overall readability
- Unit tests will be greatly appreciated
- Design will be ignored, however usability and accessibility will be taken into consideration
- Remember to update this README with instructions on how to install, run and test your application
- Your first goal is to have a working app, but feel free to improve the application however you see fit
- We hope that you can complete the assignment within 2 hours but don't set any time constraints
- Please reach out per email or by opening an issue if anything is unclear or blocking you

Best of luck

## Dev Notes

- Leave any technical notes on any libraries or tools you chose to use, the more detail the better.

### How to run app & test

- For starting the app please run `npm i` and then `npm start`, please add your Github Key on the .env file in order to retrieve information correctly or please ask me for it if needed.
- For testing, please run `npm test` in order to run test suites.
- Production build: `npm run build` and then `npm install -g serve` and `serve -s build`

### Future Improvements

Feel free to elaborate on how you would improve any of the following topics

- _Code Structuring:_ As the application can have multiple utilities I just created my folder structure separating the pages by utility as it can grow on something like /:specific-package /search, etc. Also we have a folder for the reusable components, theme, contexts (data layer), gql related functionality and tests, as the project grows, functionality can change an folders can be specialized by pages. Something to get in mind is that as the application grows we will want to have our own files for routing too as we need a "Grand Central" for correctly Client Side route our app, and talking about that, lazy loading will be a good thing to implement as application grows and other pages are being added.

- Refactoring: Refactoring can be done on multiple files as the project grows separating concerns specifically on the view/styles layers so we have a robust Design System with the components exposing functionality for handling data and logic, but this mostly goes separated by external packages that can enable better tree shaking. Also, when making further changes it will be of importance to move all services that uses tokens behind a server so we don't have risk on exposing our keys that are NOT safe for front end usage.

- Additional Features: I've added /:topic route so it's easier to change the package from which we want to find packages, also this project will live in Netlify so live version is available at https://lftoma-topics.netlify.app/. Unit testing was added too.
