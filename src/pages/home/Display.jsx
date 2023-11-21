import useData from "../../context/DataContext"
import Advice from "../apis/Advice";
import Jokes from "../apis/Jokes";
import Quote from "../apis/Quote";

export default function Display() {
    const { projectId } = useData();
    return (
        <section id="display" className="section-padding set-bg-dark">
            {projectId == 0 && <Advice />}
            {projectId == 1 && <Jokes />}
            {projectId == 2 && <Quote />}
        </section>
    )
}
