import {useState, useEffect, ChangeEvent} from "react";
import {IFormErrors, IFormValues} from "../types/validation/validationInfoTypes";

export const useForm = (callback: () => void, validate: (values: IFormValues) => IFormErrors) => {
    const [isAuth, setIsAuth] = useState<boolean>(false)
    const [values, setValues] = useState<IFormValues>({
        email: '',
        password: '',
    })
    const [errors, setErrors] = useState<IFormErrors>({})
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleLogin = () => {
        setIsAuth(!isAuth)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()

        setErrors(validate(values))
        setIsSubmitting(true)
    }

    const handleBlur = () => {
        setErrors(validate(values))
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback()
        }
    }, [errors])

    return { handleChange, handleSubmit, handleBlur, handleLogin, isAuth, values, errors, validate}

}