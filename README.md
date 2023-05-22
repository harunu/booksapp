

# BooksApp 📚

## Google Books Search with React

This repository contains a React project for searching books using the Google Books API. The application allows users to search for books, display results, view detailed information in a modal window, and offers pagination and sorting capabilities.

## Installation and Setup 🛠️

Start by cloning the repository and navigating into the project folder. Install all necessary packages by running:

```bash
npm install @mui/material axios react-redux redux redux-thunk 
```

## Project Structure 🏗️
The application consists of several components and additional files:

SearchBar.js: The search bar component for entering queries.
BookList.js: The list of results displaying title, author, and cover image.
Modal.js: The modal window for showing detailed information.
SortSelector.js: A dropdown component for sorting the results.
store folder: Contains files related to Redux state management.
App.js: The main JavaScript file. For a better design organization, the Axios fetch API call ideally should be implemented outside of App.js.
Approach and Challenges 💡
The initial version of the project was developed using vanilla React without any additional packages. Though the functionality was met, the lack of a user-friendly UI and the difficulty in implementing features like pagination and sorting posed a challenge.

To overcome these challenges and improve the codebase, additional libraries were used and several UI components from Material UI were utilized.

The public Google Books API proved unreliable at times, returning more items than the actual number of available books. This was addressed by limiting pagination to 100 and implementing a notification system when no books were available.

Search functionality was restricted to the "Enter" key and the "Submit" button to prevent data retrieval while typing in the search box. A "View Details" button was added at the bottom of the book image for better UX.

Edge cases and bugs were addressed as they appeared during development. For instance, to prevent the "No books" notification from showing up on the first search, a separate state variable was created using the useEffect hook.

The project underwent several iterations, with each iteration aimed at bettering the UI/UX, refining the codebase and improving its maintainability.

Future Improvements 🚀
Though this project is functional, there are opportunities for improvement:

Refactor code to separate concerns and improve code structure.
Create separate action files for booksActions and general Axios usage.
Enhance UI design and UX for better user interaction.
License 📄
This project is licensed under the MIT License - see the LICENSE.md file for details.

Contributions 👥
Contributions, issues, and feature requests are welcome!

Show your support ❤️
Give a ⭐️ if this project helped you!
