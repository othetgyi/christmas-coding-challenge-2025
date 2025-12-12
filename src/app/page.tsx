"use client"
import {useState} from "react";
import "./globals.css";
import validateInput from "@/utils/validateInput";

const Home = () => {
    const [word, setWord] = useState("");
    const [isValid, setIsValid] = useState(true);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        console.log("***formJson**", formJson);
        console.log("***formJson.word**", formJson.word);
        const isInputValid = validateInput(formJson.word);
        setIsValid(isInputValid);

        if (!isInputValid) return;

        const response = await fetch("/api/wordbank", {
            method: "POST",
            body: JSON.stringify(formJson.word)
        });

        console.log("***response**", response);
        setWord("");
    }

    return (
        <form method={"POST"} onSubmit={handleSubmit}>
            <label>
                Add a word to the dictionary:
                <input type="text" value={word} name="word"
                       onChange={(event) => {
                           setWord(event.target.value)
                       }} className={isValid ? "valid" : "invalid"}/>
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Home;