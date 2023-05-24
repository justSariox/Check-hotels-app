import {createContext,useContext} from "react";
import {useState} from 'react'
import {MainDataTypes} from "../../types/store/StoreTypes";



type MainContextType = {
    favorites: MainDataTypes[];
    addToFavorites: (hotel: MainDataTypes) => void;
    removeFromFavorites: (id: number) => void;
};


const MainContext = createContext<MainContextType | null>(null)



export const useMainContext = () => {
    const context = useContext(MainContext)
    if(context === null) {
        throw new Error ("useMainContext must be used within a MainContextProvider")
    }
    return context
}

export const MainContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [favorites, setFavorites] = useState<MainDataTypes[]>([]);

    const addToFavorites =(hotel:MainDataTypes) => {
        const oldFavorites = [...favorites]

        const newFavorites = oldFavorites.concat(hotel)
        setFavorites(newFavorites)

    }
    const removeFromFavorites =(id:number) => {
        const oldFavorites = [...favorites]
        const newFavorites = oldFavorites.filter((hotel)=> hotel.hotelId !==id)
        setFavorites(newFavorites)
    }

    return (
        <MainContext.Provider value={{favorites,addToFavorites,removeFromFavorites}}>
            {children}
        </MainContext.Provider>
    )
}