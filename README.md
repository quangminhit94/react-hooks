# React Hook and Context - Coding Spectrum Youtube chanel

[React Hook and Context Course](https://www.youtube.com/watch?v=l8ODM-KoDpA&list=PLMc67XEAt-ywplHhDpoj5vakceZNr8S0B)

## 1. React Hooks

Hooks are referring able to `hook` react class functionally to a functional component

Main purpose is to give class functionality to react functional components, mainly to allow functional components to read and update state.

This both makes development easier and improves performance.

## 2. 2 rules off using hooks

1. No nested hooks calls

   - Wrong

     ```js
     if(true) { useEffect( () => {return value} ) }
     ```

   - Right

     ```js
     useEffect( () => true ? return value : null )
     ```

1. Do not call hooks outside of the component

## 3. 4 Main Hooks Overview

|useState()|useEffect()|useContext()|useReducer()|
|--|--|--|--|
|Similar to this.setState()|Similar to componentDidMount()|Similar to React-Redux|Similar to React-Redux|
|Updates local component state|Use when you want to call function automatically|Allow you to `access and update the global context state` through the React context API.|Allow you to `update local component state` through redux actions and reducers|
||||`DO NOT` update state globally by itself|

## 4. useState()

```js
const [value, setValue] = useState(initialState)

[state value, set state function]

Set State: setValue(value + 1)
Read State: <p>{value}</p> in render method.

Component re-render automatic when state changes

Variable Names are user defined

Without Array Destructuring:
  const value = useState(0)[0]
  const setValue = useState(0)[1]

Multiple Properties:
  const [value, setValue] = useState(initialState)
  const [value2, setValue2] = useState(initialState)
```

