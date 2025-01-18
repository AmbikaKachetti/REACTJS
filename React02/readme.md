E8 Intro to Hooks - 14th Jan 2025
__________________________
- Hooks:
1. useState
2. useEffect
3. useRef
4. useMemo
5. useContext
6. useCallback
7. useReducer
--------------------------
E9 Props Drilling
__________________________
- App({count}) to CompA({count}) to CompB({count}) to CompC({count})
--------------------------
E10 useEffect
__________________________
1. import ueseEffect
2. useEffect(()=>{
        console.log("Hi");
    }, [])
3. it will runs on every render
4. replic for componentDidMount from class Component
5. to fetch the details from the server
6. server: https://icubecode-server.onrender.com
7. json praser - chrome extention
8. axios is a npm package/library - fetch alternative
    - npm i axios (to install)
    - npm uninstall axios (to unistall)
    - here, axios will return a promise. So, we have to use then & catch method
9. dependency array, perform useEffect inside operations only when it reaches certain count.
    for eample:
    - count === 10 then only show some alert message
    - here, we used useState to check the functionality of the "dependency array" [] 