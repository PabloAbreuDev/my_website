import Image, { StaticImageData } from "next/image";
import { ExperienceCardStyled } from "./styled";

type ExperienceType = {
    logo: StaticImageData;
    name: string;
    period: string;
    description: string;
};

function ExperienceCard({ props }: { props: ExperienceType }) {
    return <ExperienceCardStyled>
        <div className="logo-area">
            <Image width={100} height={100} src={props.logo} alt="Logo da empresa" />
        </div>
        <div className="content-area">
            <h2>{props.name}</h2>
            <div className="periodo"><p>{props.period}</p></div>
            <span className="description"><p>{props.description}</p></span>
        </div>
    </ExperienceCardStyled>
}

export default ExperienceCard