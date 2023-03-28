import { useEffect, useState } from 'react'

import axios from 'axios'
function parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

const tokenName = 'authToken'

export default function useAuth() {
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [userInfo, setUserInfo] = useState({})


    const signUp = async (username, email, password) => {
        //Implement sign up (register) function
        
    }
    const signIn = async (username, password) => {
        //Implement sign in function
    }
    const signOut = async () => {}
    useEffect(() => {
        //What shoud we do when the app is mounted?
    }, [])


    return {
        isLoggedIn,
        userInfo,
        signUp,
        signIn,
        signOut,
    }
}
