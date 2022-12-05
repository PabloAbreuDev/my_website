import { useState } from "react";
import { HomeStyled } from "./styled";
import { BiMenu } from "react-icons/bi";
import HabilityCard from "../components/hability_card";
import Lottie from 'react-lottie-player'
import lottieJson from '../public/lottieanimation.json'

export default function Home() {
  const [navVisible, setNavVisible] = useState<boolean>(false);

  return (
    <HomeStyled navVisibile={navVisible}>
      <header>
        <a
          id="menu-icon"
          className="menu-icon"
          onClick={() => setNavVisible(!navVisible)}
        >
          <BiMenu />
        </a>
        <nav>
          <ul>
            <li>Home</li>
            <li>Habilidades</li>
            <li>Experiências</li>
            <li>Projetos</li>
            <li>Contato</li>
            <li>Blog</li>
          </ul>
        </nav>
      </header>
      <section className="home">
        <div className="content">
          <div className="presentation">
            <h1>
              Olá, sou <span id="myName">{"Pablo Abreu"}</span> <br />{" "}
              Desenvolvedor Fullstack
            </h1>
            <p>
              Estou aqui pra resolver problemas, melhorar processos e tomar
              algumas chícaras de café durante o dia{" "}
            </p>
            <span className="btn-download">Download Currículo</span>
          </div>
          <div className="photo">
            <Lottie
              loop
              animationData={lottieJson}
              play
              style={{ width: 450, height: 450 }}
            />
          </div>
        </div>
      </section>
      <section className="habilidades">
        <div className="content">
          <h1 className="title">Habilidades</h1>

          <div className="card-area">
            <HabilityCard />
            <HabilityCard />
            <HabilityCard />
            <HabilityCard />
            <HabilityCard />
            <HabilityCard />
          </div>




        </div>
      </section>
    </HomeStyled>
  );
}
