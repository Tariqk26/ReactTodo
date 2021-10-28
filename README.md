# Getting Started with Create React App

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### The Process

This project was developed alongside [this YouTube tutorial](https://www.youtube.com/watch?v=pCA4qpQDZD8) created by [Dev Ed](https://github.com/developedbyed)

![](Screenshot.png)
**Figure 1** - Project

I worked through a tutorial to create a react To Do List. I wanted to get more expierence with how React works and gain more understanding about the differences between vanilla js and React.

This project utilises React to create a simple Todo app. Todo items are generated and then rendered to the DOM using `setFliteredTodos` State, this means that the original array of Todos are not modified during filtering. They can be updated to show they are completed/uncompleted. In addition, a user can delete an item from the todo list, which will remove it from localStorage and from the projects's State.

### The Challenges

I had trouble working with the filtering functionality which should allow the user to see `all`, `complete` and `incomplete` tasks on the list.

### To Do:

1. Work on the filtering functionality so that the State updates based on `complete` and `incomplete`.
