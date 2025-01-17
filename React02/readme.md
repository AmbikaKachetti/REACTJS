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