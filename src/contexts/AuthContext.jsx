import React, { createContext, useContext, useReducer } from 'react'

const AuthContext = createContext({
    user: null,
    isAuthenticated: false,
    login() { },
    logout() { }
});

const initialState = {
    user: null,
    isAuthenticated: false
};

const FAKE_USER = {
    name: "Celestine",
    email: "celestine@example.com",
    password: "qwerty",
    avatar: "https://i.pravatar.cc/100?u=zz"
};

function reducer(state, { type, payload }) {
    switch (type) {
        case "login": return {
            ...state,
            user: payload,
            isAuthenticated: true
        }

        case "logout": return {
            ...state,
            user: null,
            isAuthenticated: false
        }
        default: throw new Error("User Authentication failed!")
    }
};

function AuthProvider({ children }) {

    const [{ user, isAuthenticated }, dispatch] = useReducer(reducer, initialState)

    function login(email, password) {
        if (email === FAKE_USER.email && password === FAKE_USER.password)
            dispatch({ type: "login", payload: FAKE_USER })
    }

    function logout() {
        dispatch({ type: "logout" })
    }

    return <AuthContext.Provider value={{
        user,
        isAuthenticated,
        login,
        logout
    }}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) throw new Error("AuthContext is used outside AuthProvider scope");
    return context;
}