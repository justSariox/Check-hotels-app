import React from "react";

export type TInputHandler = {
    [key: string]: React.Dispatch<React.SetStateAction<string>>
}