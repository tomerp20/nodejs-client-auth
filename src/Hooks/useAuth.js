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
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userInfo, setUserInfo] = useState({})


    const signUp = async (username, email, password) => {
        //Implement sign up (register) function
        try {
            const response = await axios.post(`http://localhost:4000/users/registration`, {
                username,
                email,
                password
            })
            return response.data.success
        }
        catch (error) {
            //Todo - implement better error handling, maybe use toastify
            console.log(error)
        }

    }
    const signIn = async (username, password) => {
        //Implement sign in function
        try {
            const response = await axios.post(`http://localhost:4000/users/login`, {
                username,
                password
            })
            if (response.data.success) {
                localStorage.setItem(tokenName, response.data.data.token)
                getUserInfo(response.data.data.token)
                setIsLoggedIn(true)
                return true
            }
            return false
        }
        catch (error) {
            //Todo - implement better error handling, maybe use toastify
            console.log(error)
        }
    }
    const signOut = async () => {
        //Remove the token from local storage
        localStorage.removeItem(tokenName)
        //Clean the global state
        setIsLoggedIn(false)
        //Redirect to login page
        window.location.href = '/login'
    }
    const getUserInfo = async (token) => {
        const tokenPayload = parseJwt(token)
        try {
            const response = await axios.get(`http://localhost:4000/users/${tokenPayload.id}`, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            setUserInfo(response.data.data)
        }
        catch (error) {
            //Todo - implement better error handling, maybe use toastify
            console.log(error)
        }
    }

    useEffect(() => {
        const appInitiation = async () => {
            //Get the token
            const token = localStorage.getItem(tokenName)
            if (token) {
                setIsLoggedIn(true)
                await getUserInfo(token)
            }
            else {
                if (window.location.pathname !== '/login' && window.location.pathname !== '/signup') {
                    window.location.href = '/login'
                }
            }
            //if token exists, set isLoggedIn to true
            //Send request to server to get user info, based on the id from the token

            //if not, handle user redirect to login page



        }
        appInitiation()
    }, [])


    return {
        isLoggedIn,
        userInfo,
        signUp,
        signIn,
        signOut,
    }
}
