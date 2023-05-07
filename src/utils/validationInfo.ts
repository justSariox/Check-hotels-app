interface IFormValues {
    email: string,
    password: string
}

interface IFormErrors {
    email?: string,
    password?: string
}

export const validationInfo = (values: IFormValues) => {
    let errors: IFormErrors = {}

    if (!values.email.trim()) {
        errors.email = 'Email required'
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }
    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 8) {
        errors.password = 'Password needs to be 8 characters or more';
    }
    return errors
}

