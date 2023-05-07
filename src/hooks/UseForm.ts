import {useState, useEffect, ChangeEvent} from "react";

export interface IFormValues {
    email: string
    password: string
}
export interface IFormErrors {
    email?: string
    password?: string
}

export const useForm = (callback: () => void, validate: (values: IFormValues) => IFormErrors) => {
    const [values, setValues] = useState<IFormValues>({
        email: '',
        password: '',
    })
    const [errors, setErrors] = useState<IFormErrors>({})
    const [isSubmitting, setIsSubmitting] = useState(false);


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

    return { handleChange, handleSubmit, handleBlur, values, errors, validate}

}