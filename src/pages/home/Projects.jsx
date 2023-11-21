import ProjectCard from "../../components/ui/ProjectCard";
import { projects } from "../../data/const";

export default function Projects() {
  return (
    <div className="section-padding">
      <div className="card-container">
        {projects.map(item => {
          return (
            <ProjectCard key={item.label} id={item.id} icon={item.icon} label={item.label} desc={item.desc} />
          )
        })
        }
      </div>
    </div>
  )
}
