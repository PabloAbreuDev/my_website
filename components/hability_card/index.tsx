import { HabilityCardStyle } from "./styled";
import Image, { StaticImageData } from 'next/image'
type HabilityType = {
    photo: StaticImageData;
    alt: string;
    name: string;
    text: string;
};

function HabilityCard({ props }: { props: HabilityType }) {
    return (
        <HabilityCardStyle>
            <div className="header">
                <Image width={50} height={50} src={props.photo} alt={props.alt} />
                <div className="name">{props.name}</div>
            </div>
            <div className="text">{props.text}</div>
            <div className="decoration"></div>
        </HabilityCardStyle>
    );
}

export default HabilityCard;
