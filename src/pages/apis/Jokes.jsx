import { useEffect, useState } from "react";
import DisplayCard from "../../components/ui/DisplayCard";

export default function Jokes() {
    const [jokes, setjokes] = useState("")

    async function fetchJokes() {
        const response = await fetch(`https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single`);
        const jockSlip = await response.json();
        setjokes(jockSlip.joke);
    }

    useEffect(() => {
        fetchJokes();
    }, [])

    return (
        <div className="w-full mx-auto flex-center flex-col">
            <h1 className="mb-6">Jokes</h1>
            <DisplayCard>
                <div className="p-8 w-full h-full">
                    <div className="font-bold text-center">{jokes}</div>
                </div>
            </DisplayCard >
            <div className="relative w-full flex-center z-10">
                <button className="absolute -top-6 btn-soft text-neutral-400 text-sm hover:outline-1 hover:outline outline-slate-700" onClick={() => fetchJokes()}>Another Joke</button>
            </div>
        </div>
    )
}
