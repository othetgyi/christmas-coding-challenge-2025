const validateInput = async (input: string) => {
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

    const result = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`);
    const response = await result.json();
    if (response.title == "No Definitions Found") {
        return {
            isValid: false,
            message: "No definition found"
        }
    }
    return {isValid: true, message: ""};
}

export default validateInput;