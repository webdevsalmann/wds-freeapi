import useData from "../../context/DataContext";

export default function ProjectCard({ id, icon, label, desc }) {
    const { setProjectId } = useData();
    const jumpToDisplay = ()=>{
        document.getElementById("display").scrollIntoView({behavior: 'smooth'});
    }
    return (
        <div className="p-4 bg-grad-dark max-w-sm hover:set-bg-light rounded-lg outline-1 outline outline-slate-600 group" onClick={() => {setProjectId(id); jumpToDisplay()}}>
            <div>
                <div className="icon-box w-12">{icon}</div>
            </div>
            <p className="my-2 text-lg font-bold group-hover:underline">{label}</p>
            <p className="text-sm">{desc}</p>
        </div>
    )
}
