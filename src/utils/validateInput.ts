const validateInput = (input: FormDataEntryValue) => {
    const specialChars = /[~`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if (!input || specialChars.test(<string>input) || input.length < 3) {
        console.log("Invalid input");
        return false
    }
    return true;
}

export default validateInput;