import Image, { StaticImageData } from 'next/image'
import { ProjectCardStyled } from "./styled";

type ProjectType = {
    photo: StaticImageData;
    alt: string;
    name: string;
    type: string;
    text: string;
};

function ProjectCard({ props }: { props: ProjectType }) {
    return <ProjectCardStyled>
        <div className="header">
            <Image width={50} height={50} src={props.photo} alt={props.alt} />
            <div className="presentation">
                <div className="title">{props.name}</div>
                <div className="subtitle">{props.type}</div>
            </div>
        </div>
        <div className="project-content">
            <p>{props.text}</p>
        </div>
    </ProjectCardStyled>
}

export default ProjectCard