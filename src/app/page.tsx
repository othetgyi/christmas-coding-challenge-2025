"use client"
const Home = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        console.log("***formJson**", formJson);
    }

    return (
        <form method={"POST"} onSubmit={handleSubmit}>
            <label>
                Add a word to the dictionary: <input type="text" name="word"/>
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Home;