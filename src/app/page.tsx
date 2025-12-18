"use client"
import {useState} from "react";
import "./globals.css";
import validateInput from "@/utils/validateInput";

const Home = () => {
    const [word, setWord] = useState("");
    const [isValid, setIsValid] = useState(true);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const word = formData.get("word") as string;
        console.log("***word**", word);

        const {isValid, message} = await validateInput(word);
        setIsValid(isValid);
        setError(message);

        if (!isValid) return;

        const response = await fetch("/api/wordbank", {
            method: "POST",
            body: JSON.stringify({word})
        });

        setWord("");
    }

    return (
        <form method={"POST"} onSubmit={handleSubmit}>
            <label>Add a word to the dictionary:</label>
            <div className={"flex-row"}>
                <div className={"input-col"}>
                    <input type="text" value={word} name="word"
                           onChange={(event) => {
                               setWord(event.target.value)
                           }} className={isValid ? "" : "invalid"}/>
                    <div className={"error"}>{!isValid ? error : ""}</div>
                </div>
                <div className={"buttonContainer"}>
                    <button type="submit">Submit</button>
                </div>
            </div>
        </form>
    );
}

export default Home;