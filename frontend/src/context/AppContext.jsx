import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

export const AppContext = createContext()

export const AppContextProvider = ({ children }) => {

    const navigate = useNavigate()

    const [user, setUser] = useState(null)

    const [isSeller, setIsSeller] = useState(false)

    const [showUserLogin , setShowUserLogin] = useState(false)


    const value = {

        navigate, user, setIsSeller, isSeller, setUser,
        showUserLogin , setShowUserLogin

    }






    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

}

export const useAppContext = () => {

    return useContext(AppContext)
}