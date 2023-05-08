import {IFormErrors, IFormValues} from "../types/validation/validationInfoTypes";

export const validationInfo = (values: IFormValues) => {
    const errors: IFormErrors = {}

    errors.email = !values.email.trim()
        ? 'Email required'
        : !/\S+@\S+\.\S+/.test(values.email)
            ? 'Email address is invalid'
            : undefined
    errors.password = !values.password.trim()
        ? 'Password is required'
        : values.password.length < 8
            ? 'Password needs to be 8 characters or more'
            : /[^\u0000-\u007F]+/.test(values.password)
                ? 'Password should not contain Cyrillic characters'
                : undefined
    return errors
}

