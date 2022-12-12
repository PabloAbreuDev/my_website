import Image, { StaticImageData } from "next/image";
import { ContactCardStyled } from "./styled";

type ContactCardType = {
    icon: StaticImageData;
    name: string;
    content: string;
    link: string
}

function ContactCard({ props }: { props: ContactCardType }) {
    return <a href={props.link} target="blank" style={{ textDecoration: "none" }}>
        <ContactCardStyled>
            <Image width={70} height={70} src={props.icon} alt="Ícone do elemento" />
            <h3>{props.name}</h3>
            <p>{props.content}</p>

        </ContactCardStyled> </a>
}

export default ContactCard