import { useState } from "react";
import { HomeStyled } from "./styled";
import { BiMenu } from 'react-icons/bi'

export default function Home() {
  const [navVisible, setNavVisible] = useState<boolean>(false)

  return (
    <HomeStyled navVisibile={navVisible}>
      <header>

        <a id="menu-icon" className="menu-icon" onClick={() => setNavVisible(!navVisible)}>
          <BiMenu />
        </a>
        <nav>
          <ul>
            <li>Home</li>
            <li>Habilidades</li>
            <li>Experiências</li>
            <li>Projetos</li>
            <li>Contato</li>
          </ul>
        </nav>





      </header>
      <section>
        <div>
          <h1>Olá, sou Pablo Abreu
            Desenvolvedor Fullstack</h1>
        </div>
        <div></div>
      </section>
    </HomeStyled >
  )
}
