import React, { createContext, useCallback, useContext, useEffect, useReducer } from 'react';

const CityContext = createContext({
    cities: [],
    isLoading: false,
    currentCity: {},
    getCity() { },
    createCity() { },
    deleteCity(id) { }

});

const initialState = {
    cities: [],
    isLoading: false,
    error: "",
    currentCity: {},
}


function reducer(state, { payload, type }) {
    switch (type) {
        case 'loading':
            return {
                ...state,
                isLoading: true,
            };
        case 'cities/loaded':
            return {
                ...state,
                isLoading: false,
                cities: payload
            };
        case 'city/loaded':
            return {
                ...state,
                isLoading: false,
                currentCity: payload
            };
        case 'city/created':
            return {
                ...state,
                cities: [...state.cities, payload],
                currentCity: payload,
                isLoading: false
            };
        case 'city/deleted':
            return {
                ...state,
                cities: state.cities.filter(city => city.id !== payload),
                isLoading: false,
                currentCity: {}
            };
        case 'rejected':
            return {
                ...state,
                isLoading: false,
                error: payload
            }
        default:
            throw new Error("Error in reducer")
    }
}

function CityProvider({ children }) {
    const [{ cities, isLoading, currentCity }, dispatch] = useReducer(reducer, initialState);



    useEffect(() => {
        (async function () {
            dispatch({ type: "loading" })
            try {
                const res = await fetch("http://localhost:8080/cities");
                const data = await res.json();
                dispatch({ type: "cities/loaded", payload: data })
            } catch (err) {
                dispatch({
                    type: "rejected",
                    payload: err
                })
            }
        })()
    }, [])

    const getCity = useCallback(async function (id) {
        if (Number(id) === Number(currentCity.id)) return;
        dispatch({ type: "loading" })
        try {
            const res = await fetch(`http://localhost:8080/cities/${id}`);
            const data = await res.json();
            dispatch({ type: "city/loaded", payload: data })
        } catch (err) {
            dispatch({
                type: "rejected",
                payload: err
            })
        }
    }, [currentCity.id]);

    async function createCity(newCity) {
        dispatch({ type: "loading" })
        try {
            const res = await fetch(`http://localhost:8080/cities/`, {
                method: "post",
                body: JSON.stringify(newCity),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await res.json();
            dispatch({ type: "city/created", payload: data })
        } catch (err) {
            dispatch({
                type: "rejected",
                payload: err
            })
        }
    }

    async function deleteCity(id) {
        dispatch({ type: "loading" })
        try {
            await fetch(`http://localhost:8080/cities/${id}`, {
                method: "delete",
            });
            dispatch({ type: "city/deleted", payload: id });
        } catch (err) {
            dispatch({
                type: "rejected",
                payload: err
            })
        }
    }


    return <CityContext.Provider value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
        deleteCity
    }}>
        {children}
    </CityContext.Provider>

}




export function useCities() {
    const context = useContext(CityContext);
    if (context === undefined) throw new Error("Context is used outside Provider scope");
    return context;
}

export default CityProvider