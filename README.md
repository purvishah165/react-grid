The aim of this project is to create a single page React app that implements the Grid.

The grid is a list of companies that have been processed by an analysis model and then filtered to show only companies matching certain criteria.
The results are displayed in a ‘grid’ (hence the name) each result is represented by a tile that describes the company.
As the user scrolls down the grid it loads a new ‘page’ of results and appends them (classic infinite-scroll), this continues until there’s no more results at which point a message is displayed informing the user.

In this project, at a time, 100 results are getting fetched.

## Available Scripts
In the project directory, you can run:

### `npm install`
### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
