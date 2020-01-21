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

