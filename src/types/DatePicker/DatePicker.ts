import React, {Dispatch, SetStateAction} from "react";
import {MainDataTypes} from "../store/StoreTypes";

export type TInputHandler = {
    [key: string]: React.Dispatch<React.SetStateAction<string>>
}

export interface IDatePickerProps {
    setSearchResults: Dispatch<SetStateAction<MainDataTypes[]>>
    checkIn: string
    days: string
    location: string
    setCheckOut: Dispatch<SetStateAction<string>>
    setLocation: Dispatch<SetStateAction<string>>
    setCheckIn: Dispatch<SetStateAction<string>>
    setDays: Dispatch<SetStateAction<string>>
    checkOut: string
    handleSubmit:(event: React.FormEvent<HTMLFormElement>)=>Promise<any>
}