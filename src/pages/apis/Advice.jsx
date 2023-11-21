import { useEffect, useState } from "react";
import DisplayCard from "../../components/ui/DisplayCard";
import LoadingSpinner from "../../components/ui/LoadingSpinner";

export default function Advice() {
    const [advice, setAdvice] = useState("")
    const [loading, setLoading] = useState(true);

    async function fetchAdvice() {
        setLoading(true)
        const randomQueryParam = `?${Math.random()}`;
        const response = await fetch(`https://api.adviceslip.com/advice${randomQueryParam}`);
        const adviceslip = await response.json();
        setAdvice(adviceslip.slip.advice);
        setLoading(false)
    }

    useEffect(() => {
        fetchAdvice();
    }, [])

    return (
        <div className="w-full mx-auto flex-center flex-col">
            <h1 className="mb-6">Advice</h1>
            <DisplayCard className="">
                <div className="p-8 w-full h-full flex-center flex-col">
                    <div className="font-bold text-center">{!loading ? advice : <LoadingSpinner />}</div>
                </div>
            </DisplayCard >
            <div className="relative w-full flex-center z-10">
                <button className="absolute -top-6 btn-soft text-neutral-400 text-sm hover:outline-1 hover:outline outline-slate-700" onClick={() => fetchAdvice()}>Another Advice</button>
            </div>
        </div>
    )
}
