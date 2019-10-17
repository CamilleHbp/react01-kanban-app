# Kanban board

This project is a simple Kanban Board application made to learn some ReactJS concepts.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Hooks

I am trying to use [React Hooks](https://reactjs.org/docs/hooks-intro.html) and have mostly functionnal components. I'm trying to learn about the best way to architecture a React app, don't hesitate to do pull requests to help me if you want to!

As of now, there are three components that manage logic:

* `App` links the components to the Redux store using the [`<Provider>`](https://react-redux.js.org/api/provider) component.
* `NoteList` declares all [action creators](https://redux.js.org/basics/actions#action-creators) and passes them as callbacks to the presentantional components.
* `AddNote` is very small component whose only function is to dispatch a `createNote` action. As such it embeds the logic.

## Redux Store

The kanban state is managed through [Redux](https://redux.js.org/).

I have normalized the store.

Instead of having an array of `Lanes` with each an array of `Notes`, there is an object for each entity, itself with two sub-objects with entities by id  and an array with all ids.

<details>
 <summary>JSON example</summary>

```javascript
const initialState = {
  lanes: {
    byId: {
      lane1: {
        id: 'lane1',
        title: 'lane1',
        notes: ['note1', 'note2']
      },
      lane2: {
        id: 'lane2',
        title: 'lane2',
        notes: ['note3', 'note4']
      }
    },
    allIds: ['lane1', 'lane2']
  },
  notes: {
    byId: {
      note1: {
        id: 'note1',
        lane: 'lane1',
        editing: false,
        content: 'note1'
      },
      note2: {
        id: 'note2',
        lane: 'lane1',
        editing: false,
        content: 'note2'
      },
      note3: {
        id: 'note3',
        lane: 'lane2',
        editing: false,
        content: 'note3'
      },
      note4: {
        id: 'note4',
        lane: 'lane2',
        editing: false,
        content: 'note4'
      },
      allIds: ['note1', 'note2', 'note3', 'note4']
    }
  }
};
```

</details>

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
