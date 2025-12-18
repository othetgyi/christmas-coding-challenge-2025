const validateInput = (input: string) => {
    const specialChars = /[~`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if (!input) {
        return {
            isValid: false,
            message: "Please enter a word"
        }
    }

    if (specialChars.test(<string>input)) {
        return {
            isValid: false,
            message: "Words cannot contain special characters"
        }
    }

    if ((input as string).length < 3) {
        return {
            isValid: false,
            message: "Words must be at least three letters long"
        }
    }

    return {isValid: true, message: ""};

}

export default validateInput;