"use client"
import {useState} from "react";

const Home = () => {
    const [word, setWord] = useState("");
    console.log("***word**", word);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        console.log("***formJson**", formJson);
        const response = await fetch("/api/wordbank");
        const result = await response.json();
        setWord("");
        console.log("***result**", result);
    }

    return (
        <form method={"POST"} onSubmit={handleSubmit}>
            <label>
                Add a word to the dictionary: <input type="text" value={word} name="word" onChange={(event) => {
                setWord(event.target.value)
            }}/>
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Home;