import { useEffect, useState } from "react";
import DisplayCard from "../../components/ui/DisplayCard";

export default function Quote() {
    const [quote, setQuote] = useState("")
    const [author, setAuthor] = useState("")

    async function fetchQuote() {
        const response = await fetch(`https://api.quotable.io/random`);
        const quoteData = await response.json();
        setQuote(quoteData.content);
        setAuthor(quoteData.author);
    }

    useEffect(() => {
        fetchQuote();
    }, [])

    return (
        <div className="w-full mx-auto flex-center flex-col">
            <h1 className="mb-6">Quotes</h1>
            <DisplayCard className="z-0">
                <div className="p-8 w-full h-full">
                    <div className="text-light font-bold text-center italic">
                        {quote && <span>"{quote}"</span>}
                    </div>
                    <div className="mt-2 text-right italic">
                        {author && <span>by - {author}</span>}
                        </div>
                </div>
            </DisplayCard >
            <div className="relative w-full flex-center z-10">
                <button className="absolute -top-6 btn-soft text-neutral-400 text-sm hover:outline-1 hover:outline outline-slate-700" onClick={() => fetchQuote()}>Another Quote</button>
            </div>
        </div>
    )
}
