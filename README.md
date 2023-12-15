To run the project, follow these steps:

1. Install dependencies:

### `npm install`

2. Start the project:

### `npm start`

To run tests:

### `npm test`

To view the test report:

### `npm run coverage`

**Netlify link:**

https://animal-list-test.netlify.app

**Description:**

This web application allows users to create a list of their favorite animals.
Animal search by name is performed on the SearchPage with the option to add the
animal to favorites.

The list of favorite animals can be viewed on the HomePage, where the user can
also rate the animal from 1 to 5. In addition, the user can choose which
characteristics of the animal they like.

**A brief description of the development process:**

Upon receiving the task, my first step was to conceptualize the implementation of the application. 
The main choice was between two approaches:

1. Display a list of favorite animals on the main page, with search on a secondary page.
2. Implement animal search on the main page, with the list of favorite animals on a secondary page.

Since the main task is to display a list of favorite animals, I decided in favor of the first option.

Known bugs:
1. When an animal is already in favorites, there is no check for its presence in the favorites list upon a repeated search and server response.

Wishlist:
- Cover code sections not covered by tests.
- Fix the mentioned bug.
- Consider using icons for page navigation instead of buttons.
- Improve eslint configuration (e.g., prohibit the use of "any").
- Use a skeleton instead of a loader while fetching data.

**Technologies Used:**

-   create-react-app;
-   typescript;
-   MUI + Tailwind;
-   react-router;
-   redux-toolkit;
-   jest tests
-   local storage
