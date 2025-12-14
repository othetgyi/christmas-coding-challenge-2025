const validateInput = (input: FormDataEntryValue) => {
    const specialChars = /[~`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if (!input || specialChars.test(<string>input)) {
        return false
    }
    return true;
}

export default validateInput;