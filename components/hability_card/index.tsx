import { HabilityCardStyle } from "./styled";
import Image, { StaticImageData } from 'next/image'
type HabilityType = {
    photo: StaticImageData;
    name: string;
    text: string;
};

function HabilityCard({ props }: { props: HabilityType }) {
    return (
        <HabilityCardStyle>
            <div className="header">
                <Image width={50} height={50} src={props.photo} alt="A foto da habilidade" />
                <div className="name">{props.name}</div>
            </div>
            <div className="text">{props.text}</div>
        </HabilityCardStyle>
    );
}

export default HabilityCard;
